import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../search/SearchBar";
import FiltersButton from "../filter/FiltersButton";

const SpecificRecipe = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipe, setRecipe] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [nutritionLabels, setNutritionLabels] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("recipe_id");

  useEffect(() => {
    const fetchSpecificRecipe = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/SpecificRecipe/${id}`
        );
        setRecipe(res.data.recipe);
        setIngredients(res.data.ingredients);
        setInstructions(res.data.instructions);
        setNutritionLabels(res.data.nutritionLabels);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSpecificRecipe();
    console.log("Specific recipe id:", id);
  }, [id]);

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
      <header>{recipe && <h1>{recipe.name}</h1>}</header>
      <main>
        {/* <div className="search-bar-container">
          <SearchBar /> }
          { <button onClick={handleButtonClick}>Filter</button>
        </div> */}
        <br />
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
                <td width="300px">{ingredient.ingredient}</td>
                <td>{ingredient.quantity}</td>
                <td>{ingredient.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Instructions:</h3>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction.instruction}</li>
          ))}
        </ol>

        <h3>Nutrition</h3>
        <table>
          <tbody>
            <tr>
              <th>Calories</th>
              {nutritionLabels.map((nutrition, index) => (
                <td key={index}>{nutrition.calories}</td>
              ))}
            </tr>
            <tr>
              <th>Sugar</th>
              {nutritionLabels.map((nutrition, index) => (
                <td key={index}>{nutrition.sugar}</td>
              ))}
            </tr>
            <tr>
              <th>Cholesterol (in mg)</th>
              {nutritionLabels.map((nutrition, index) => (
                <td key={index}>{nutrition.cholesterol}</td>
              ))}
            </tr>
            <tr>
              <th>Sodium (in mg)</th>
              {nutritionLabels.map((nutrition, index) => (
                <td key={index}>{nutrition.sodium}</td>
              ))}
            </tr>
            <tr>
              <th>Serving Size</th>
              {nutritionLabels.map((nutrition, index) => (
                <td key={index}>{nutrition.serving_size}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SpecificRecipe;
