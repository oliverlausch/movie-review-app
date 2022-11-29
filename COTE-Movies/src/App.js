import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";
//import styled from 'styled-components'
//import { makeStyles } from '@material-ui/core/Styles';
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Admin from "./components/Admin"
import Update from "./components/Update"
import Delete from "./components/Delete"
import UpdateUser from "./components/Users/UpdateUser"
import UpdateUserProfile from "./components/Users/UpdateUserProfile";
import DeleteUser from "./components/Users/DeleteUser"
import GetUser from "./components/Users/GetUser"
import ProtectedRoutes from "./components/ProtectedRoutes";
import MostPopular from "./components/MostPopular";

/*const useStyles = makeStyles(theme => ({
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
}));*/


function App() {

  //const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={ <Home/> } />
          <Route path="/MostPopular" element={ <MostPopular/>} />
          <Route path="/signin" element={ <SignIn/> } />
          <Route path="/signup" element={ <SignUp/> } />

          {/* Protected Routes */}
          <Route element={ <ProtectedRoutes /> }>
            <Route path="/admin" element={ <Admin/> } />
            <Route path="/getuser" element={ <GetUser/> } />
            <Route path="/update" element={ <Update/> } />
            <Route path="/delete" element={ <Delete/> } />
            <Route path="/update-user" element={ <UpdateUser/> } />
            <Route path="/update-user-profile" element={ <UpdateUserProfile/> } />
            <Route path="/delete-user" element={ <DeleteUser/> } />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App