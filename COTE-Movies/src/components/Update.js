import axios from 'axios';
import React, { useState, useEffect } from "react";
import './ReviewStyle.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 10px 10px;
border-radius: 6px;
margin-left: 20px;
margin-right: 15px;
width: 80%;
height: 25px;
align-items: left;
`;

const Button = styled.button`
background:   linear-gradient(to bottom, #303030 0%, #541d1d 80%);
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
opacity: 1.0;
`;

    function Update() {
    const [post, setPost] = useState("");
    const [rating, setRating] = useState('');
    const [id, setID] = useState('');
    const [userId, setUser] = useState('');
    const [date, setDate] = useState('');
    const [videoId, setVideo] = useState('');
    const navigate = useNavigate();

    console.log(post);
    console.log(rating);
    console.log(id);

    const url = `http://localhost:5000/api/Reviews/${id}`
    /*const [data, setData] = useState({
        id: "",
        userId: "", 
        videoId: "",
        date: "",
        rating: "",
        post: ""
    })*/



    function submit(e) {
        // Prevent the form from refreshing the page upon submission,
        // And send the form instead, to our API via POST method!
        e.preventDefault();
        axios.put(url, {
            ID: id,
            userId: userId,
            videoId: videoId,
            Date: date,
            Rating: rating,
            Post: post
        }).then(() => {
            navigate("/");
        })

    }


    /*function handle(e) {
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }*/

    useEffect(() => {
        setPost(localStorage.getItem('Post'));
        setRating(localStorage.getItem('Rating'));
        setID(localStorage.getItem('ID'));
        setUser(localStorage.getItem('UserID'));
        setDate(localStorage.getItem('Date'));
        setVideo(localStorage.getItem('VideoID'));
    }, [])



  return (
    <div>
        <Container>
        <h2>Update Review</h2>

        
            <form onSubmit={(e) => submit(e)}>
            {/*<input
                        value={id}
                        placeholder='Review ID'
                        onChange={(e) => setID(e.target.id)}
                    />
            <input
                        value={userId}
                        placeholder='User ID'
                        onChange={(e) => setUser(e.target.userId)}
                    />
            <input
                        value={date}
                        type="date"
                        placeholder='Date'
                        onChange={(e) => setDate(e.target.date)}
                    />
            <input
                        value={videoId}
                        placeholder='Video ID'
                        onChange={(e) => setVideo(e.target.videoId)}
  />*/}
                    <br/>
            Select Movie Rating: <select input
                        value={rating}
                        placeholder='User rating'
                        onChange={(e) => setRating(e.target.value)}>
                        
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                <br/>
                <textarea

                        rows={8}
                        value={post}
                        placeholder='Post'
                        onChange={(e) => setPost(e.target.value)}
                    />
                <Button>Update</Button><Button><Link to="/">Return to Home</Link></Button>
            </form>
        </Container>
    </div>
  )
}

export default Update;
