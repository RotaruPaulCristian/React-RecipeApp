import React from "react";
import style from "./Recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, healthLabel }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>({healthLabel})</p>
      <div>
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>
      <p>Total calories: {Math.floor(calories)}kcal</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
