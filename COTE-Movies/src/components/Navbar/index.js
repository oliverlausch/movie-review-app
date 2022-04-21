import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, Button} from './NavbarElements'

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
            <img src={require('../../images/LogoSmall.png')} alt=""/>
        </NavLink>
        <Bars />
        <NavMenu>
        <Button onClick={"document.querySelector(#reload)"}><NavLink to="/#" activeStyle>
                Home
            </NavLink></Button>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink to="/admin">Admin</NavBtnLink>
        </NavBtn>

    </Nav>
    </>
  )
}

export default Navbar