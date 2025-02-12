// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 2% 2.5%;
	background: white;
	border-top: 2px solid black;
	// position: absolute;
	bottom: 0;
	width: 90%;
	margin-left: 100px;

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #ff0000;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: black;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color:#000000;
	margin-bottom: 40px;
	font-weight: bold;
`;
