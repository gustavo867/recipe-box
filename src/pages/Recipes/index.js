import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import arrow from '../../assets/images/arrow-left.svg';

export default class Recipes extends React.Component {
  state = {
    loading: false,
    meal: null,
  };

  async componentDidMount() {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ meal: data.meals[0] });
  }

  render() {
    return (
      <Container>
        <Link to="/">
         <img src={arrow}/>
        </Link>
          
          {this.state.loading || !this.state.meal ? (
            <h1 color="#000">Loading ...</h1>
          ) : (   
          <CardContainer>
            <TextHome>
              <h1>Name: {this.state.meal.strMeal}</h1>
              <h2>
              Ingredients: 
              </h2>
              <p>{this.state.meal.strIngredient1}</p>     
              <p>{this.state.meal.strIngredient2}</p>
              <p>{this.state.meal.strIngredient3}</p>
              <p> {this.state.meal.strIngredient4}</p> 
              <h2>Measures :</h2>  
              <p> {this.state.meal.strMeasure1}</p> 
              <p> {this.state.meal.strMeasure2}</p> 
              <p> {this.state.meal.strMeasure3}</p> 
              <p> {this.state.meal.strMeasure4}</p> 
              <p> {this.state.meal.strMeasure5}</p> 
              <p> {this.state.meal.strMeasure6}</p> 
              <p> {this.state.meal.strMeasure7}</p> 
              <p> {this.state.meal.strMeasure8}</p> 
              <p> {this.state.meal.strMeasure9}</p> 
              <p> {this.state.meal.strMeasure10}</p> 
              <p> {this.state.meal.strMeasure11}</p> 
              <p> {this.state.meal.strMeasure12}</p> 
              <p> {this.state.meal.strMeasure13}</p> 
              <p> {this.state.meal.strMeasure14}</p> 
                <Link to="/recipes">
                <h3>To see a new recipe, reload the page</h3>
                </Link>  
            </TextHome>
            <Instructions>
                <img src={this.state.meal.strMealThumb}/>
                <h2>Instructions:</h2>
                <p>{this.state.meal.strInstructions}</p>
            </Instructions>
                           
          </CardContainer>
          )}
      </Container>
    )
  }
}

export const Container = styled.div`
  font-family: 'Roboto', Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0f0f5;
  height: 100%;
  text-overflow: ellipsis;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-overflow: ellipsis;
  overflow: hidden;

  width: 80vw;
  height: 70vh;

  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  background-color: #D6E3F8;
`;

export const TextHome = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  margin-right: 100px;

  width: 400px;

  p {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.4);
  }
  h1 {
    font-size: 28px;
    color: rgba(0, 0, 0, 0.6);  
  }
  h2 {
    margin-top: 5px;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);  
  }
  a {
    text-decoration: none;
  }

  h3 {
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 20px;
  }

  h3:hover {
    text-decoration: none;
    color: rgba(108, 99, 255, 0.5)
  }
`;

export const Instructions = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;

  h2 {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);  
  }
  p {
    text-overflow: ellipsis;
    text-align: center;
    margin-top: 5px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 10px;
  }
`;
