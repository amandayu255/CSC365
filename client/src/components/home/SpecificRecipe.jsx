import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../search/SearchBar";
import FiltersButton from "../filter/FiltersButton";

const SpecificRecipe = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("recipe_id");

  useEffect(() => {
    const fetchSpecificRecipe = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/SpecificRecipe/${id}`
        );
        setIngredients(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSpecificRecipe();
    console.log("Specific recipe id:", id);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
    // Perform search logic here and update ingredients state
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log("Button clicked");
  };

  return (
    <div className="specific-recipe-container">
      <header>
        <h1>Recipe Name</h1>
        <p>Cuisine: </p>
        <p>Preparation Time: </p>
      </header>
      <main>
        <div className="search-bar-container">
          <SearchBar />
          <button onClick={handleButtonClick}>Filter</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td>{ingredient.ingredient}</td>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SpecificRecipe;
