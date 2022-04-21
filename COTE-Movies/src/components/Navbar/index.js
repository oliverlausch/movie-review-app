import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars,} from './NavbarElements'

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
            <img src={require('../../images/LogoSmall.png')} alt=""/>
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to="/#" activeStyle>
                Home
            </NavLink>
            <NavLink to="/signup" activeStyle>
                Register
            </NavLink>
            <NavLink to="/search" activeStyle>
                Admin
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink to="/admin">Admin</NavBtnLink>
        </NavBtn>

    </Nav>
    </>
  )
}

export default Navbar