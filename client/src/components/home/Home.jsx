import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SearchBar from "../search/SearchBar";
import SpecificRecipe from "./SpecificRecipe";
import "./Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/Recipe");
        console.log("Response from backend:", res.data); // Log the response
        setRecipes(res.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  return (
    <div className="home-container">
      <header>
        <h1>Recipes</h1>
      </header>

      <div className="searchbar-container">
        <SearchBar onSearch={handleSearch} className="search-bar" />
        <Link to="/CreateRecipe">
          <button className="add-button">+</button>
        </Link>
        {/* <Link to="/SpecificRecipe">
          <button className="test">Link to Specific Recipe Test</button>
        </Link> */}
      </div>

      <main>
        <Table stripped bordered hover size="sm">
          <thead>
            <tr>
              <th width="100">Recipe ID</th>
              <th width="200">Name of Recipe</th>
              <th width="150">Created By User</th>
              <th width="150">Cuisine</th>
              <th width="150">Time (minutes)</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.recipe_id}>
                <td>
                  <Link to={`/SpecificRecipe/${recipe.recipe_id}`}>
                    {recipe.recipe_id}
                  </Link>
                </td>
                <td>{recipe.name}</td>
                <td>{recipe.created_by_user}</td>
                <td>{recipe.cuisine}</td>
                <td>{recipe.time_minutes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  );
};

export default Home;
