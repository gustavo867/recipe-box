import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/images/barbecue.svg';

export default function Home() {
  return (
    <Container>
      <Contact>
        <CompanyName>
          <div></div>
          <h2>Cleiton Recipes</h2>
        </CompanyName>
        <About>
          <Link to="/recipes"> 
            <h2>Awesome Recipes</h2>
          </Link>
        </About>
      </Contact>

      <PageHome>
        <TextHome>
          <h1>Awesomes</h1>
          <h1>Recipes</h1>
          <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Possimus molestiae fuga nisi, 
            at amet quia ullam voluptatem 
            sequi inventore doloremque officia! 
            Accusantium animi quisquam corrupti 
            saepe, porro deleniti facilis sed?
          </p>

          <button type="submit">Learn More</button>
        </TextHome>
        <img src={logo} alt="box"/>
      </PageHome>
    </Container>
    )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f5;
  font-family: 'Roboto', Arial, sans-serif;
`;

export const Contact = styled.div`
  display: flex;
  height: 60px;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  margin-top: 30px;

  h2 {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const CompanyName = styled.div`
  height: 200%;
  display: flex;
  justify-content: flex-end;

  div {
    margin-right: 8px;
    background-color: #6C63FF;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const About = styled.div`
  height: 200%;
  display: flex;
  justify-content: flex-start;

  a {
    text-decoration: none;
  }

  h3 {
    color: rgba(0, 0, 0, 0.4);
    font-size: 20px;
    margin-right: 30px;
  }

  h3:hover {
    text-decoration: none;
    color: rgba(108, 99, 255, 0.5)
  }
`;

export const PageHome = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
    height: 500px;
  }
`;

export const TextHome = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 100px;

  width: 400px;

  p {
    color: rgba(0, 0, 0, 0.4);
  }
  h1 {
    font-size: 60px;
    color: rgba(0, 0, 0, 0.9);  
  }
  button {
    width: 100%;
    margin-top: 20px;
    border: 0;
    border-radius: 8px;
    height: 48px;
    font-size: 18px;
    background: rgba(108, 99, 255, 0.5);
    cursor: pointer;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.9);
  }
`;

