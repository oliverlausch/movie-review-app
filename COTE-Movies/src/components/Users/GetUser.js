import * as Axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Navbar'
import Footer from '../Footer'
import GetUserReviews from '../GetUserReviews';
import GetReviews from '../GetReviews';

const Container = styled.div`
width: 100%;
height: 100%;
align-items: left;
list-style-type: none;
`;

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
margin-left: 10px;
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
margin-left: 10px;
cursor: pointer;
opacity: 1.0;
`;

const Title = styled.div`
display: block;
flex-direction: row;
padding: 20px;
justify-content: flex-start;
border-bottom: 1px solid #969696;
`;

function GetUser() {
    const [account, setAccount] = useState('');
    const [user, setUser] = useState([]);
    const UserProfile = user.filter(user => user.email === account);
    const setData = (userId, name, email, password) => {
        localStorage.setItem('UserID', userId)
        localStorage.setItem('Name', name)
        localStorage.setItem('Email', email)
        localStorage.setItem('Password', password)
      }
    
    const setUserLocal = (userId) => {
      
      localStorage.setItem('UserID', userId)
    }
      
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect(() => {
         
        
        
        async function GetUsers() {
          await Axios.get("http://localhost:5000/api/Users").then(
            (response) => {setUser(response.data);  setUserLocal(UserProfile[0].userId); });
        }
        GetUsers()
        setAccount(localStorage.getItem('Email'));
        
        
        
    }, [UserProfile] )

    
    
    
    
    
  

  return (
      <><><Navbar /><div>
          
          <br />
          <br />
          <br />
          <Container>
          <Title>
          <h2>Welcome to the User Profile portal</h2>
          </Title>
          <br/>
              {/* <Button onClick={GetUsers}> My Profile </Button> */}
              <Button><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Go Back</Link></Button>
              {UserProfile.map(user => (
                  <ul key={user.userId}>
                      <br />
                      <li className='List'><b>User ID:</b> {user.userId}</li>
                      <li className='List'><b>Name:</b> {user.name}</li>
                      <li className='List'><b>Email:</b> {user.email}</li>
                      <li className='List'><b>Password:</b> {user.password}</li>
                      <li className='List'><b>Date registered:</b> {user.dateRegistered}</li>
                      <br />
                      
                  </ul>
              ))}
              <Update onClick={() => setData(user.userId, user.name, user.email, user.password)}><Link to="/update-user-profile" style={{ textDecoration: 'none', color: 'white' }}>Edit Profile</Link></Update>
              <Delete onClick={() => setData(user.userId)}><Link to="/delete-user" style={{ textDecoration: 'none', color: 'white' }}>Delete Account</Link></Delete>
              <GetUserReviews />
          </Container>
      </div></>
      <br />
          <br />    
      <Footer/></>
  )
}

export default GetUser;