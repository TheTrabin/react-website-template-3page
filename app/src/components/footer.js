import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
align: center;
display: flex;
flex-direction: column;
justify-content: center;
width: 60%;
align-items: center;
background-color: #A9A1FF;
border-radius: 22px;
h2 {
    background-color: #127456;
    width: 20%;
    border-radius: 12px;
}
`




const Footer = () => {
    return (
        <div>
            <hr></hr>
        <Foot>
            
        <p>Nuture Naturally</p>
        <p>services and pictures are copywrite ©2020 Autie AK</p>
        <p>Web code ©2020 <a href="http://mmcleod.me">Trabin</a>. </p>
        </Foot>
        </div>
    )
}

export default Footer;