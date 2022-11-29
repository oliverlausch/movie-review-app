import React from 'react'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const useAuth = () => {

  const [account, setAccount] = useState('');
    if ((localStorage.getItem('Email') && (localStorage.getItem('Password')))) {
      
      // Switch to useContext for better practice next time!
      const user = { loggedIn: true };
      console.log('Login successful')
      return user && user.loggedIn;

    } else {
      
      const user = { loggedIn: false };
      console.log('Login failed') 
      return user && user.loggedIn;
    }

}

const ProtectedRoutes = () => {
    
const navigate = useNavigate();
const isAuth = useAuth();

  return (
      
    isAuth ? <Outlet/> :  navigate("/signin")
  )
}

export default ProtectedRoutes;