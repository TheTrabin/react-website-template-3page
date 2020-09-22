/** @format */

import React from 'react';
import styled from 'styled-components';

const AutoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60%;
	background-color: #5c63af;
`;
const InfoBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 90%;
	margin: auto;
`;
const ActualInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1%;
`;
const AboutMe = styled.div`
	background-color: #99ac5d;
`;


const About = () => {
	let info = {
		name: 'Auntie AK',
		summery: `Hey Niece/Nephew! I’m Auntie AK. Hispafrican hippie, chef, bartender, herbalist and cannabis consultant. Since very young, I’ve had a knack for helping others live their best lives. Throughout my life, I’ve developed my hospitality and culinary skills to better serve my community and to ground myself through tough times.`
		 
		
	};
	let info2 = {
		more: 'More recently, I was diagnosed with fibromyalgia after suffering with lower back pains and PTSD from childhood trauma and abusive relationships. After diagnosis, I was prescribed a medication to treat the nerve damage. After only a few weeks of taking it, I started coughing uncontrollably and at random times. Daily. It was awful, and I couldn’t get it to stop. I discovered after doing some research that my medication was the culprit. I was livid. This was the last straw for me. How is it that all these prescription meds caused side effects that you ended up needing another set of pills to “fix” the problem.',
		stuff: `So I applied for a medical marijuana card. I took some food out of my diet. I started changing my sleep schedule and actually waking up before 11am. I exercised. I used the magic of medicinal teas. And it was working. Really well.`,
	};
	return (
		<div>
			<AutoBox>
				<InfoBox>
					<img src={'https://via.placeholder.com/200/150.png'} alt=' ' />
					<ActualInfo>
						<AboutMe>About Me</AboutMe>
						<p>{info.name}</p>
						<p>{info.summery}</p>
					</ActualInfo>
				</InfoBox>
				<ActualInfo>
					<AboutMe>More information</AboutMe>
					<p>{info2.more}</p>
					<p>{info2.stuff}</p>
				</ActualInfo>
			</AutoBox>
			
		</div>
	);
};

export default About;
