import axios from 'axios';
import React, { useState, useEffect } from "react";
import '../components/PostReview.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
const PostReviewDiv = styled.div`

`;
const Text1 = styled.text`
color: #ff324d;
font-size: 32px;
font-weight: bold;

`;
const Text2 = styled.text`
color: white;
font-size: 20px;
font-style: italic;
`;

    function PostReview() {
    const url = "http://localhost:5000/api/Reviews"
    const [videoId, setVideoID] = useState('');
    var today = new Date();
    
   const navigate = useNavigate();
    
    const [data, setData] = useState({
        id: 0,
        userId: "", 
        videoId: "",
        date: today,
        rating: "",
        post: ""
    })

    function submit(e) {
        // Prevent the form from refreshing the page upon submission,
        // And send the form instead, to our API via POST method!
        e.preventDefault();
        if (localStorage.getItem('Email')!=null){
            axios.post(url, {
                id: data.id,
                userId: localStorage.getItem('UserID'),
                videoId: videoId,
                date: data.date,
                rating: data.rating,
                post: data.post
            }).then(response => {
                console.log(response.data)
        })
        } else {
            alert("System: You must sign in to post a review.")
            navigate("/signin")
        }
    }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(() => {
        setVideoID(localStorage.getItem('VideoID'));
    }, )

    function handle(e) {
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
  return (
    <PostReviewDiv>
        <Text1>Post Review</Text1>

        
            <form onSubmit={(e) => submit(e)}>
            <Text2>Select Movie Rating: </Text2><select input
                        value={data.rating}
                        placeholder='Movie rating'
                        onChange={(e) => handle(e)}
                        id = "rating">
                        
                        <option value="">----------</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                <br/>
                <textarea rows={6} placeholder = "Write review here..." onChange={(e) => handle(e)} id = "post" value={data.post} type="text"></textarea>
                <Button>Submit</Button>
            </form>
    </PostReviewDiv>
  )
}

export default PostReview;
