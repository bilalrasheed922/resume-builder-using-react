// components/Navbar/index.js

import React, { useState } from 'react';
import "./navbar.module.css";
import navPic from '../../assets/logo.png'

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./navbarElements";
import { FaWeight } from 'react-icons/fa';

const Navbar = () => {
	return (
		<>
			<Nav className="nav">
			<img src={navPic} style={{width:"3%",height:"70%",marginTop:'2px',marginRight:'-90px',marginLeft:'-60px'}} alt="navLogo"/>
			<p style={{fontSize: '25px',paddingTop:'9px',marginLeft:'-430px'}}>Resume Builder</p>
				<Bars />

				<NavMenu>
					<NavLink to="/about" >
						About
					</NavLink>
					
					<NavLink to="/loginForm" activeStyle>
						Login Form
					</NavLink>
					
					<NavLink to="/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn >
					<NavBtnLink to="/signin">
						Build My Resume
					</NavBtnLink>
				</NavBtn>
				
			</Nav>
		</>
	);
};

export default Navbar;
