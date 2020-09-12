import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Navbar } from 'reactstrap';
import styled from 'styled-components';
import '../App.css';

// let IndieFlower = `IndieFlower`
let ShadowsIntoLightTwo = `ShadowsIntoLightTwo`

export const ContainerDiv = styled.div`
    
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1px;
background-color: #99AC5D;
width: 100%;
color: #216745;
margin: 0;
border-radius: 30px;
h1 {
    font-family: ${ShadowsIntoLightTwo}, sans-serif;
}
`;


const NavigationBar = () => {
    return (
    <ContainerDiv>
        <Navbar>
            <h1> Nurture Naturally with Auntie AK </h1>
            
            <Link to={'/'}>
                <Button>
                Home
                </Button>
            </Link>
            <Link to={'/About'}>
                <Button>
                About
                </Button>
            </Link>
            <Link to={'/Menu'}>
                <Button>
                Menu of Services
                </Button>
            </Link>
      </Navbar>
      
    </ContainerDiv>
    )
};
    
export default NavigationBar;