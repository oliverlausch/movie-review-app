import * as Axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-dom";

/*const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
`;*/

const Button = styled.button`
background:   linear-gradient(to bottom, #303030 0%, #541d1d 80%);
// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         borderRadius: 3,
//         border: 0,
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  cursor: pointer;
  color: white;
  background-color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 10px;
`;

const Delete = styled.button`
background:   linear-gradient(to bottom, #303030 0%, #541d1d 80%);
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
opacity: 1.0;
`;

const Update = styled.button`
background:   linear-gradient(to bottom, #303030 0%, #541d1d 80%);
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
opacity: 1.0;
`;

const Container = styled.div`
width: 100%;
height: 100%;
align-items: left;
background: black;
opacity: 0.9;
color: #fff;
list-style-type: none;
border-style: outset;
`;

function GetReview() {

  const [vid, setVID] = useState('');

// Define setData
// setData is review.id, post and rating. Store in memory using
// local storage for use later in Update.



  const setData = (id, rating, post, date, videoId, userId) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('Rating', rating)
    localStorage.setItem('Post', post)
    localStorage.setItem('Date', date)
    localStorage.setItem('VideoID', videoId)
    localStorage.setItem('UserID', userId)
  } 

 // Define a state used to store the Review once called
  const [review, setReview] = useState([]);
  //const [videoReview, setVideoReview] = useState('');

  /*useEffect(() => {
    setVideoReview(localStorage.getItem('VideoID'));
    console.log(setVideoReview + "This is it")
}, [])*/

  // Call API methods with axios

  async function getReviews() {
    await Axios.get("http://localhost:5000/api/Reviews").then(
      (response) => setReview(response.data));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setVID(localStorage.getItem('VideoID'));
}, )

const VidReview = review.filter(review => review.videoId === vid)

  return (
    <div>
    <Button onClick={getReviews}> Show Reviews </Button>
   
    {/*let GetReview = reviews.filter(function (review) {
        return review.videoId === {videoId};
    }).map(function (review) {
        return review.post;
    })*/}

    {VidReview.map(review => (
      <ul key={review}>
        <br/>
        <ProductMain>
        <li className='List'><b>Rating:</b> {review.rating}</li>
        <li className='List'><b>Post:</b> {review.post}</li>
        <li className='List'><b>Date:</b> {review.date}</li>
        <li className='List'><b>User ID:</b> {review.userId}</li>
        <br/>
        </ProductMain>
        </ul>
    ))}
    </div>
  )
}

export default GetReview;