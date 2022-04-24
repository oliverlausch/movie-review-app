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
width: 70%;
height: 25px;
align-items: left;
`;

//const FormTemplate = styled.div`
//background: #fff;
//padding: 20px;
//width: 50%;
//`;

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
flex-direction: column;
gap: 10px;
width: 40%;
padding-bottom: 17px;
`;

    function UpdateUser() {
    
    const [userId, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [dateRegistered, setDateRegistered] = useState('');
    const navigate = useNavigate();

    const url = `http://localhost:5000/api/Users/${userId}`

    function submit(e) {
        // Prevent the form from refreshing the page upon submission,
        // And send the form instead, to our API via POST method!
        e.preventDefault();
        axios.put(url, {
            userId: userId,
            //dateRegistered: dateRegistered,
            email: email,
            name: name,
            password: password
        }).then(() => {
            navigate("/admin");
        })

    }

    useEffect(() => {
        setUser(localStorage.getItem('UserID'));
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setPassword(localStorage.getItem('Password'));
        //setDateRegistered(localStorage.getItem('RegDate'));
    }, [])



  return (
    <div>
        <Container>
        <h2>User Update Form</h2>

            {/*<FormTemplate>*/}
            <form onSubmit={(e) => submit(e)}>
            <ButtonFlex>
                Name:
                <input
                        value={name}
                        placeholder='Name / Nickname'
                        onChange={(e) => setName(e.target.value)}
                    />
                Email Address:
            <input
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                Password:
            <input
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
            </ButtonFlex>
                <Button>Update</Button><Button><Link to="/admin">Return to Dashboard</Link></Button>
                
            </form>
        {/*</FormTemplate>*/}
        </Container>
    </div>
  )
}

export default UpdateUser;
