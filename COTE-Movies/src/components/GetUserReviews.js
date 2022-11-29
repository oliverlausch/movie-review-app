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
  margin-left: 10px;
`;

const Delete = styled.button`
background:   linear-gradient(to bottom, #303030 0%, #541d1d 80%);
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
text-decoration: none;
opacity: 1.0;
margin-left: 10px;
`;

const Update = styled.button`
background:   linear-gradient(to bottom, #303030 0%, #541d1d 80%);
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
text-decoration: none;
opacity: 1.0;
margin-left: 10px;
`;

const Container = styled.div`
width: 95%;
height: 100%;
padding: 5px;
align-items: left;
border-color:#541d1d;
opacity: 0.9;
color: black;
list-style-type: none;
border-style: outset;
`;

const List = styled.div`
padding-left: 10px;
padding-top: 5px;

`;



function GetUserReviews() {

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

  

  async function getReviews() {
    setVID(localStorage.getItem('UserID'));
    await Axios.get("http://localhost:5000/api/Reviews").then(
      (response) => setReview(response.data));
  }
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  


  const VidReview = review.filter(review => review.userId == vid)

  return (
    <div>
    <Button onClick={() => {getReviews();} }> Show Reviews </Button>

    {VidReview.map(review => (
      <ul key={review}>
        <br/>
        <Container>
          <List>
          <li className='List'><b>Video ID:</b> {review.videoId}</li>
          <li className='List'><b>Rating:</b> {review.rating}</li>
          <li className='List'><b>Post:</b> {review.post}</li>
          <li className='List'><b>Date:</b> {review.date}</li>
          <br/>
          </List>
        <Update onClick={() => setData(review.id, review.rating, review.post, review.date, review.videoId, review.userId)} ><Link to="/update" style={{ textDecoration: 'none', color: 'white' }}>Update</Link></Update>
        <Delete onClick={() => setData(review.id)}><Link to="/delete" style={{ textDecoration: 'none', color: 'white' }}>Remove</Link></Delete>
        </Container>
      </ul>
    ))}
    </div>
  )
}

export default GetUserReviews;