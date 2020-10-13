import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components'; 
import boatImage from '../assets/boat.jpg';

const Styles = styled.div`
  .jumbotron {
    background: url(${boatImage}) no-repeat top;
    background-size: cover;
    color: #ccc;
    vh: 300px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, natus blanditiis consequatur illum sit perspiciatis et tempora modi officiis beatae.</p>
      </Container>
    </Jumbo>
  </Styles>
)