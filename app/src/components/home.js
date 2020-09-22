/** @format */

import React from 'react';
import MyCarousel from './carosel.js';
import styled from 'styled-components';
import '../App.css';

const Head = styled.h1`
	background-color: #a9a1ff;
	width: 56%;
	border-radius: 12px;
`;
const Mission = styled.div`
	align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60%;
	align-items: center;
	background-color: #99ac5d;
	border-radius: 22px;
	h2 {
		background-color: #127456;
		width: 20%;
		border-radius: 12px;
	}
`;
const Summery = styled.div`
	align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60%;
	align-items: center;
	background-color: #99ac5d;
	border-radius: 22px;
	h2 {
		background-color: #127456;
		width: 20%;
		border-radius: 12px;
	}
`;

const List = styled.ul `
list-style: none;
`

const Home = () => {
	return (
		<div classname='container'>
			<center>
				<div>
					<Head>Welcome to Auntie AK's Webpage: Nuture Naturally</Head>
					<Mission>
						<h2>Mission statement</h2>
						<List>
							<li>
								{' '}
								Giving people a sense of empowerment through natural tools and
								resources.
							</li>
							<li>Harmonious progressive connections</li>
							<li>Support ambitions and sense of security</li>
							<li>Inspiring friends</li>
							<li>Stability, Strength, Health</li>
						</List>
					</Mission>
					<hr></hr>
				</div>
				<div>
					<MyCarousel />
				</div>
				<div>
					<hr></hr>
					<Summery>
						<h2>Summery title</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</Summery>
				</div>
			</center>
		</div>
	);
};

export default Home;
