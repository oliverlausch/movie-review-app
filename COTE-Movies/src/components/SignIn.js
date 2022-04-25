import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import Typography from '@mui/material/Typography';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './ProtectedRoutes';

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

      function SignIn() {
const classes = useStyles();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
const [JSONResponse, setJSONResponse] = useState('');


const url = "http://localhost:5000/api/Users/Login"

const setData = (email, password) => {
  localStorage.setItem('Email', email)
  localStorage.setItem('Password', password)
}

    useEffect( () => {

        if (JSONResponse === "Success" & email === 'admin@mail.com' & password === 'admin')
        {
          setData(email, password)
          navigate("/admin");
        }
        else if (JSONResponse === "Success" )
        {
          setData(email, password)
          navigate("/getuser");
        }
        
      })
      
      const submit = async (e) => {

        e.preventDefault();
        
      axios.post(url, {
          email: email,
          password: password
      }).then((response) =>
      setJSONResponse(response.data.status))
        
    }

  return(
    <><Navbar /><Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={(e) => submit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
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
            autoComplete="current-password" 
            onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container><Footer /></>
  )
      }

export default SignIn;