import axios from 'axios';
import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
//import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 190px;
padding-bottom: 80px;
`;

const ButtonFlex = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 17px;
gap: 10px;
width: 25em;
`;

const useStyles = makeStyles((theme) => ({
    paper: {
      //marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '120px',
      fontfamily: "Helvetica"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

    function SignUp() {
    
    //const [userId, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [dateRegistered, setDateRegistered] = useState('');
    const navigate = useNavigate();
    var today = new Date();

    const url = "http://localhost:5000/api/Users"

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState({
      userId: 0, 
      dateRegistered: today,
      email: "",
      name: "",
      password: ""
  })

    function submit(e) {
        // Prevent the form from refreshing the page upon submission,
        // And send the form instead, to our API via POST method!
        e.preventDefault();
        axios.post(url, {
            userId: data.userId,
            dateRegistered: today,
            email: email,
            name: name,
            password: password
        }).then(() => {
            navigate("/signin");
        })
    }

    /*function handle(e) {
      const newData={...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
  }*/
  const classes = useStyles();


  return (
    <><Navbar /><div>
          <Container>
          <Avatar className={classes.avatar}></Avatar><h1>Sign Up Form</h1>

              {/*<FormTemplate>*/}
              <form onSubmit={(e) => submit(e)}>
                  <ButtonFlex>
                      {/*User ID:
    <input
            value={userId}
            placeholder='User Id#'
            onChange={(e) => setUser(e.target.value)}
/>*/}
                      {/*Name:
                      <input
                          value={name}
                          placeholder='Name / Nickname'
                          onChange={(e) => setName(e.target.value)} />
                      {/*
                      Email Address:
                      <input
                          value={email}
                          placeholder='Email'
onChange={(e) => setEmail(e.target.value)} />*/}

<TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name / Nickname"
                      name="name"
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                      />




                      <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={(e) => setEmail(e.target.value)}
                      />

                      <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                      />

                  </ButtonFlex>
                  <Link href="/signin" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
              <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>

              </form>
          </Container>
      <Footer /><br/></div></>
      
  )
}

export default SignUp;
