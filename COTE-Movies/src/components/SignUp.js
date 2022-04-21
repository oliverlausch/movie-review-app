import axios from 'axios';
import React, { useState } from "react";
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
  background-color:  #1b36ef;
  color: #fff;
  font-size: 20px;
  padding: 8px 10px;
  border-radius: 25px;
  width: 20%;
  margin: 10px 0px;
  cursor: pointer;
`;

const ButtonFlex = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 40%;
padding-bottom: 17px;
`;

    function SignUp() {
    
    const [userId, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateRegistered, setDateRegistered] = useState('');
    const navigate = useNavigate();
    var today = new Date();

    const url = "http://localhost:5000/api/Users"

    const [data, setData] = useState({
      userId: 0, 
      dateRegistered: today,
      email: "",
      name: ""
  })

    function submit(e) {
        // Prevent the form from refreshing the page upon submission,
        // And send the form instead, to our API via POST method!
        e.preventDefault();
        axios.post(url, {
            userId: data.userId,
            dateRegistered: today,
            email: email,
            name: name
        }).then(() => {
            navigate("/admin");
        })
    }

    function handle(e) {
      const newData={...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
  }



  return (
    <div>
        <Container>
        <h2>Sign Up Form</h2>

            {/*<FormTemplate>*/}
            <form onSubmit={(e) => submit(e)}>
            <ButtonFlex>
                {/*User ID:
                <input
                        value={userId}
                        placeholder='User Id#'
                        onChange={(e) => setUser(e.target.value)}
  />*/}
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
               {/*Date Registered:
            <input
                        value={dateRegistered}
                        type={'datetime-local'}
                        placeholder='Registration Date'
                        onChange={(e) => setDateRegistered(e.target.value)}
  />*/}
            </ButtonFlex>
                <Button>Register</Button><Button><Link to="/admin">Return to Dashboard</Link></Button>
                
            </form>
        {/*</FormTemplate>*/}
        </Container>
    </div>
  )
}

export default SignUp;
