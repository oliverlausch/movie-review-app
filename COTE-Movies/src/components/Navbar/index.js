import React from 'react'
<<<<<<< Updated upstream
import {Nav, NavLink, NavMenu, NavBtn, AdminNavBtn, NavBtnLink, Bars,} from './NavbarElements'
=======
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, Button} from './NavbarElements'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
            </NavLink>
            <NavLink to="/signup" activeStyle>
                Register
            </NavLink>
            <NavLink to="/admin" activeStyle>
                Admin
            </NavLink>
=======
            </NavLink></Button>
>>>>>>> Stashed changes
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
<<<<<<< Updated upstream
        <AdminNavBtn>
=======
        <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
        <NavBtn>
>>>>>>> Stashed changes
            <NavBtnLink to="/admin">Admin</NavBtnLink>
        </AdminNavBtn>

    </Nav>
    </>
  )
}

export default Navbar