import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import arrow from "../../assets/images/arrow-left.svg";

export default function Recipes() {
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState(undefined);

  const getMeals = async () => {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const response = await fetch(url);
    const data = await response.json();

    setMeal(data.meals[0]);
    setLoading(false);
  };

  useEffect(() => {
    getMeals();
  }, []);

  if (meal === undefined) {
    return (
      <Container>
        <h1>Loading ...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Link to="/">
        <img src={arrow} />
      </Link>

      {loading && meal ? (
        <h1 color="#000">Loading ...</h1>
      ) : (
        <CardContainer>
          <TextHome>
            <h1>Name: {meal.strMeal}</h1>
            <h2>Ingredients:</h2>
            <p>{meal.strIngredient1}</p>
            <p>{meal.strIngredient2}</p>
            <p>{meal.strIngredient3}</p>
            <p> {meal.strIngredient4}</p>
            <h2>Measures :</h2>
            <p> {meal.strMeasure1}</p>
            <p> {meal.strMeasure2}</p>
            <p> {meal.strMeasure3}</p>
            <p> {meal.strMeasure4}</p>
            <p> {meal.strMeasure5}</p>
            <p> {meal.strMeasure6}</p>
            <p> {meal.strMeasure7}</p>
            <p> {meal.strMeasure8}</p>
            <p> {meal.strMeasure9}</p>
            <p> {meal.strMeasure10}</p>
            <p> {meal.strMeasure11}</p>
            <p> {meal.strMeasure12}</p>
            <p> {meal.strMeasure13}</p>
            <p> {meal.strMeasure14}</p>
            <ReloadButton onClick={() => getMeals()}>
              <h3>Click ro reload</h3>
            </ReloadButton>
          </TextHome>
          <Instructions>
            <img src={meal.strMealThumb} />
            <h2>Instructions:</h2>
            <p>{meal.strInstructions}</p>
          </Instructions>
        </CardContainer>
      )}
    </Container>
  );
}

export const Container = styled.div`
  font-family: "Roboto", Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0f0f5;
  height: 100vh;
  text-overflow: ellipsis;
`;

export const ReloadButton = styled.button`
  display: flex;
  border-radius: 8px;
  background: red;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
  width: 10vw;

  h3 {
    font-size: 1rem;
    align-self: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-overflow: ellipsis;

  padding: 1rem;

  max-width: 90vw;
  min-width: 80vw;
  min-height: 70vh;
  border-radius: 2rem;

  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  background-color: #d6e3f8;
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
