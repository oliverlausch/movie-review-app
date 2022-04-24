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

const ButtonFlex = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`;

function Delete() {
    const navigate = useNavigate();
    const [id, setID] = useState('');
    const url = `http://localhost:5000/api/Reviews/${id}`

    function submit(e) {
        // Prevent the form from refreshing the page upon submission,
        // And send the form instead, to our API via POST method!
        e.preventDefault();
        axios.delete(url, {
            ID: id
        }).then(() => {
            navigate("/");
        })

    }

    useEffect(() => {
        setID(localStorage.getItem('ID'));
    }, [])


    return (
        
        <div>
        <Container>
        <h2>Delete Review</h2>
        <p>Are you sure you want to delete this review?</p>
            <ButtonFlex>
            <form onSubmit={(e) => submit(e)}>
                <Button>Delete</Button>
            </form>
            <Button><Link to="/">Return to Home</Link></Button>
            
            </ButtonFlex>
        </Container>
    </div>
    )
}

export default Delete;