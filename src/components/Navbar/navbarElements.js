// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`

	height: 75px;
	display: flex;
	justify-content: space-between;
	padding: 0.1rem calc((80vw - 1200px) / 2);
	z-index: 12;
	/* Third Nav */
	/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
	color: #808080;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #000000;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #808080;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -300px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;
	/* Third Nav */
	/* justify-content: flex-end;
width: 100vw; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
background-color: #fff000;
border-radius: 12px;
color: #000;
cursor: pointer;
font-weight: bold;
padding: 10px 15px;
text-align: center;
transition: 200ms;
width: 100%;
box-sizing: border-box;
border: 0;
text-decoration:none;
font-size: 20px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
	/* Second Nav */
	margin-left: 24px;
	&:not(:disabled):hover,
	&:hover {
		outline: 0;
  background: #f4e603;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
	}
	&:disabled {
		filter: saturate(0.2) opacity(0.5);
		-webkit-filter: saturate(0.2) opacity(0.5);
		cursor: not-allowed;
	  }
`;
