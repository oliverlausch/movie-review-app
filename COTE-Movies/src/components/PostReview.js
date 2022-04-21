import axios from 'axios';
import React, { useState, useEffect } from "react";
import '../components/PostReview.css';
import styled from 'styled-components';


const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
const PostReviewDiv = styled.div`
background-color: hotpink;
`;
const Text1 = styled.text`
color: white;
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
    
   
    
    const [data, setData] = useState({
        id: 0,
        userId: "", 
        videoId: "",
        date: "",
        rating: "",
        post: ""
    })

    function submit(e) {
        // Prevent the form from refreshing the page upon submission,
        // And send the form instead, to our API via POST method!
        e.preventDefault();
        axios.post(url, {
            id: data.id,
            userId: data.userId,
            videoId: videoId,
            date: data.date,
            rating: data.rating,
            post: data.post
        }).then(response => {
            console.log(response.data)
        })

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
                <input onChange={(e) => handle(e)} id = "userId" value={data.userId} placeholder="User ID" type="number"></input>
                <br/>
                {/*<input onChange={(e) => handle(e)} id = "videoId" value={videoId} placeholder="IMDB Video id" type="string"></input>
                <br/>*/}
                <input onChange={(e) => handle(e)} id = "date" value={data.date} placeholder="date" type="date"></input>
                <br/>
            <Text2>Select Movie Rating: </Text2><select input
                        value={data.rating}
                        placeholder='Movie rating'
                        onChange={(e) => handle(e)}
                        id = "rating">
                        
                        
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
