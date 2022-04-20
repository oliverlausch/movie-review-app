import { Routes, Route, Link } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/Styles';
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Admin from "./components/Admin"
import Update from "./components/Update"
import Delete from "./components/Delete"
<<<<<<< HEAD
import Search from "./components/Search"
=======
import UpdateUser from "./components/Users/UpdateUser"
import DeleteUser from "./components/Users/DeleteUser"
>>>>>>> becea5c5 (Added User CRUD, update and delete forms, updated Admin Panel)

const useStyles = makeStyles(theme => ({
  button:{
    backgroundColor: "inherit",
    color: "white",
    fontSize: "100px",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer !important",

    "&:hover": {
      borderColor: "white !important",
      color: "white !important"
    }
    },
    Link: {
      textDecoration: "none",
    }
}));


function App() {

  const classes = useStyles();

  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/signin" element={ <SignIn/> } />
          <Route path="/signup" element={ <SignUp/> } />
          <Route path="/admin" element={ <Admin/> } />
          <Route path="/update" element={ <Update/> } />
          <Route path="/delete" element={ <Delete/> } />
          <Route path="/search" element={ <Search/> } />
        </Routes>
      </Router>
=======
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
        <Route path="/update-user" element={ <UpdateUser/> } />
        <Route path="/delete-user" element={ <DeleteUser/> } />
      </Routes>
      </BrowserRouter>
>>>>>>> becea5c5 (Added User CRUD, update and delete forms, updated Admin Panel)
    </div>
  )
}

export default App