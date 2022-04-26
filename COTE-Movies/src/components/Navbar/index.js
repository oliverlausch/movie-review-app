import React from 'react'
import changeKey from '../Home';
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, Button} from './NavbarElements'

const Navbar = () => {

    const signoutFunc = () => {
        if (localStorage.getItem('Email') != null){
        localStorage.clear();}
    }

    const signInOutText = () => {
        if (localStorage.getItem('Email') != null){
            return "Sign Out"
        }
        else {
            return "Sign In"
        } 
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
            <NavBtnLink onClick={signoutFunc} to="/signin">{signInOutText}</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>

    </Nav>
    </>
  )
}

export default Navbar