import React, { useState, useEffect } from "react";
import "./index.css";
import Recipe from "./components/Recipe";

const App = () => {
  const API_ID = "9f97c01f";
  const API_KEY = "6ec0b9d1bfe612ac3a66b01a4399cdaf";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleUpdateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleGetSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="container">
      <form className="searchForm" onSubmit={handleGetSearch}>
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={handleUpdateSearch}
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            healthLabel={recipe.recipe.healthLabels[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
