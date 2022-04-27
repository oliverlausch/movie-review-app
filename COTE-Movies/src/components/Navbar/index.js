import React from 'react'
import changeKey from '../Home';
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, Button} from './NavbarElements'

const Navbar = () => {

    var profDirVar;
    var loginVar;
    var signInOutText;

    const signoutFunc = () => {
        if (localStorage.getItem('Email') != null){
        localStorage.clear();}
    }

    if (localStorage.getItem('Email') != null){
        profDirVar = "/getuser";
        loginVar = "/";
        signInOutText = "Sign Out"
    }
    else{
        profDirVar = "/signin";
        loginVar = "/signin"
        signInOutText = "Sign In"
    }

  return (
    <>
    <Nav>
        <NavLink onClick={"document.querySelector(#reload)"} to="/">
            <img src={require('../../images/LogoSmall.png')} alt=""/>
        </NavLink>
        <Bars />
        <NavMenu>
        <Button onClick={changeKey}><NavLink to= "/">API Key</NavLink></Button>
        <Button onClick={"document.querySelector(#reload)"}><NavLink to="/#" activeStyle>
                Home
            </NavLink></Button>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to={profDirVar}>My Profile</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink onClick={signoutFunc} to={loginVar}>{signInOutText}</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink to={loginVar}>Sign Up</NavBtnLink>
        </NavBtn>

    </Nav>
    </>
  )
}

export default Navbar