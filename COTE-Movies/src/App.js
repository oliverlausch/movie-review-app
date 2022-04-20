import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/Styles';
import Button from '@mui/material/Button';
// pages
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Admin from "./components/Admin"
import Update from "./components/Update"
import Delete from "./components/Delete"

const useStyles = makeStyles(theme => ({
  button:{
    backgroundColor: "#d9d7d7 !important",
    color: "black !important",
    
    fontSize: "22px !important",
    fontWeight: "550 !important",
    padding: "10px 60px !important",
    borderRadius: "10px !important",
    border: "2px solid !important",
    
    margin: "10px 0px !important",
    cursor: "pointer !important",
    "&:hover": {
      borderColor: "Red !important",
      color: "Red !important"
    }
    },
    Link: {
      
      textDecoration: "none",
      
    }
}));



const AppName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const AppLogo = styled.img`
width: 48px;
height: 48px;
margin: 15px;
`;

const Navbar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: black;
color: white;
padding: 10px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
position: fixed;
width: 100%;
z-index:9999;
`;




function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Navbar>
        <AppName>
            <AppLogo src="/VideocutLOGO.png" />
            COTE-Movies
        </AppName>
          
          <Link to="/" className={classes.Link}><Button variant= "Contained" className={classes.button} onClick={"document.querySelector(#reload)"}>Home</Button></Link>
          <Link to="/signin" className={classes.Link}><Button className={classes.button}>Sign in</Button></Link>
          <Link to="/signup" className={classes.Link}><Button className={classes.button}>Register</Button></Link>
          <Link to="/admin" className={classes.Link}><Button className={classes.button}>Admin</Button></Link>
        </Navbar>
      </nav>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signin" element={ <SignIn/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/admin" element={ <Admin/> } />
        <Route path="/update" element={ <Update/> } />
        <Route path="/delete" element={ <Delete/> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App