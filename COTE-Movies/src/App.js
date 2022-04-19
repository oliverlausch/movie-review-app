import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import styled from 'styled-components'

// pages
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Admin from "./components/Admin"
import Update from "./components/Update"
import Delete from "./components/Delete"

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

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
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Navbar>
        <AppName>
            <AppLogo src="/VideocutLOGO.png" />
            COTE-Movies
        </AppName>
        <Button onClick={"document.querySelector(#reload)"}><Link to="/">Home</Link></Button>
        <Button><Link to="/signin">Sign in</Link></Button>
        <Button><Link to="/signup">Register</Link></Button>
        <Button><Link to="/admin">Admin</Link></Button>
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