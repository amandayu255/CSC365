import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SearchBar from "../search/SearchBar";
import "./Grocery.css";

const Grocery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/recipes");
        setRecipes(res.data);
      } catch (error) {
        console.log(err);
      }
    };
  }, []);

  return (
    <div className="grocery-container">
      <header>
        <h1>Grocery Stores</h1>
      </header>

      <SearchBar onSearch={handleSearch} />
      {/* <FiltersButton onClick={handleFiltersClick} /> */}

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="427">Name</th>
            <th width="750">Address</th>
            <th width="427">Distance Away</th>
          </tr>
        </thead>

        <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td>{recipe.created_by_user}</td>
                <td>{recipe.cuisine}</td>
                <td>{recipe.can_cook}</td>
                <td>{recipe.equipment}</td>
                <td>{recipe.time}</td>
                <td>{recipe.nutrition_label}</td>
              </tr>
            ))}
          </tbody>
      </Table>
    </div>
  );
};

export default Grocery;
