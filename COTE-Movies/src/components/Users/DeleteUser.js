import axios from 'axios';
import React, { useState, useEffect } from "react";
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
  background-color: #1b36ef;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const ButtonFlex = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`;

function DeleteUser() {
    const navigate = useNavigate();
    const [id, setUserID] = useState('');
    const url = `http://localhost:5000/api/Users/${id}`

    function submit(e) {
        // Prevent the form from refreshing the page upon submission,
        // And send the form instead, to our API via POST method!
        e.preventDefault();
        axios.delete(url, {
            userId: id
        }).then(() => {
            navigate("/");
        })

    }

    useEffect(() => {
        setUserID(localStorage.getItem('UserID'));
    }, [])


    return (
        
        <div>
        <Container>
        <h2>Delete User Form</h2>
        <p>Are you sure you want to delete this User?</p>
        <p>*This cannot be reversed!*</p>
            <ButtonFlex>
            <form onSubmit={(e) => submit(e)}>
                <Button>Delete</Button>
            </form>
            <Button><Link to="/admin">Return to Dashboard</Link></Button>
            
            </ButtonFlex>
        </Container>
    </div>
    )
}

export default DeleteUser;