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


const Contact = styled.div`
display: flex;
	flex-direction: column;
	justify-content: center;
	width: 90%;
	margin: auto;
`;

const Contacting = () => {
    return (
<AutoBox>
					<AboutMe>Get in touch</AboutMe>
					<InfoBox>
						<div class='split style1'>
							<ActualInfo>
                                <Contact>
								<form method='post' action='#'>
									<div class='fields'>
										<div class='field half'>
											<label for='name'>Name</label>
											<input type='text' name='name' id='name' />
										</div>
										<div class='field half'>
											<label for='email'>Email</label>
											<input type='text' name='email' id='email' />
										</div>
										<div class='field'>
											<label for='message'>Message</label>
											<textarea name='message' id='message' rows='5'></textarea>
										</div>
									</div>
									<ul class='actions'>
										<li>
											<a href='mailto:email@email.com' class='button submit'>
												Send Message
											</a>
										</li>
									</ul>
								</form>
                                </Contact>
							</ActualInfo>
						</div>
					
				<AutoBox>
					<ActualInfo>
						<ul class='contact'>
							<li>
								<h3>Email</h3>
								<a href='mailto:admin@mmcleod.me'>admin@mmcleod.me</a>
							</li>
							<li>
								<h3>Phone</h3>
								<span>
									<a href='tel:2532373244'>(253)237-3244</a>
								</span>
							</li>
							<li>
								<h3>Social</h3>
								<ul class='icons'>
									<li>
										<a
											href='https://twitter.com/KNMage'
											class='icon brands fa-twitter'>
											<span class='label'>Twitter</span>
										</a>
									</li>
									<li>
										<a
											href='https://discordapp.com/users/295431493956665344'
											class='icon brands fa-discord'>
											<span class='label'>Facebook</span>
										</a>
									</li>
									<li>
										<a
											href='https://github.com/TheTrabin'
											class='icon brands fa-github'>
											<span class='label'>GitHub</span>
										</a>
									</li>
									<li>
										<a href='twitch.tv/thetrabin' class='icon brands fa-twitch'>
											<span class='label'>Instagram</span>
										</a>
									</li>
									<li>
										<a
											href='www.linkedin.com/in/mj-mcleod'
											class='icon brands fa-linkedin-in'>
											<span class='label'>LinkedIn</span>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</ActualInfo>
				</AutoBox>
                </InfoBox>
				</AutoBox>

    )}

    export default Contacting;