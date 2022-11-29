import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, Button} from './NavbarElements'

const Navbar = () => {

    var profDirVar;
    var loginVar;
    var signInOutText;

    const signoutFunc = () => {
        if (localStorage.getItem('Email') != null){
        localStorage.clear();
        this.setState({});}
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
        <Button onClick={"document.querySelector(#reload)"}><NavLink to="/#" activeStyle>
                Home
            </NavLink></Button>
        <Button><NavLink to="/MostPopular" activeStyle>
                Most Popular
        </NavLink></Button>
        <Button><NavLink to={profDirVar} activeStyle>
                My Profile
        </NavLink></Button>
        </NavMenu>
        {/* <NavBtn>
            <NavBtnLink to={profDirVar}>My Profile</NavBtnLink>
        </NavBtn> */}
        <NavBtn>
            <NavBtnLink onClick={signoutFunc} to={loginVar}>{signInOutText}</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>

    </Nav>
    </>
  )
}

export default Navbar