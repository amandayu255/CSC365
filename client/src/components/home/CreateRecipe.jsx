import React, { useState } from "react";
import axios from "axios";
import "./CreateRecipe.css";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [timeMinutes, setTimeMinutes] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [instructionList, setInstructionList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/Recipe", {
        name,
        cuisine,
        time_minutes: timeMinutes,
        created_by_user: 1, // Set created_by_user to 1
        ingredientList,
        instructionList,
      });
      console.log("Response from backend:", res.data);
      console.log("Recipe created successfully:", res.data);
      setName("");
      setCuisine("");
      setTimeMinutes("");
      setIngredientList([]);
      setInstructionList([]);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  const handleAddIngredient = () => {
    setIngredientList([
      ...ingredientList,
      { name: "", quantity: "", unit: "", grams: "" },
    ]);
  };

  const handleIngredientChange = (index, value) => {
    const newList = [...ingredientList];
    newList[index] = value;
    setIngredientList(newList);
  };

  const handleAddInstruction = () => {
    setInstructionList([...instructionList, ""]);
  };

  const handleInstructionChange = (index, value) => {
    const newList = [...instructionList];
    newList[index] = value;
    setInstructionList(newList);
  };

  return (
    <div className="create-recipe-container">
      <header>
        <h1>Create Recipe</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Cuisine:
            <input
              type="text"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            />
          </label>
          <label>
            Cook Time (in mins):
            <input
              type="text"
              value={timeMinutes}
              onChange={(e) => setTimeMinutes(e.target.value)}
            />
          </label>

          <div className="ingredients-section">
            <h2>Ingredients</h2>
            {ingredientList.map((ingredient, index) => (
              <div className="ingredient-input-group" key={index}>
                <input
                  className="ingredient-input"
                  type="text"
                  value={ingredient.name}
                  onChange={(e) =>
                    handleIngredientChange(index, {
                      ...ingredient,
                      name: e.target.value,
                    })
                  }
                  placeholder="Ingredient"
                />
                <input
                  className="quantity-input"
                  type="text"
                  value={ingredient.quantity}
                  onChange={(e) =>
                    handleIngredientChange(index, {
                      ...ingredient,
                      quantity: e.target.value,
                    })
                  }
                  placeholder="Quantity"
                />
                <select
                  className="unit-dropdown"
                  value={ingredient.unit}
                  onChange={(e) =>
                    handleIngredientChange(index, {
                      ...ingredient,
                      unit: e.target.value,
                    })
                  }
                >
                  <option value="">Select Unit</option>
                  <option value="tsp">tsp</option>
                  <option value="tbsp">tbsp</option>
                  <option value="cup">cup</option>
                  <option value="g">g</option>
                  <option value="oz">oz</option>
                  <option value="count">count</option>
                </select>
                <input
                  className="grams-input"
                  type="text"
                  value={ingredient.grams}
                  onChange={(e) =>
                    handleIngredientChange(index, {
                      ...ingredient,
                      grams: e.target.value,
                    })
                  }
                  placeholder="Estimated Grams"
                />
              </div>
            ))}
            <button type="button" onClick={handleAddIngredient}>
              Add Ingredient
            </button>
          </div>

          <div className="instructions-section">
            <h2>Instructions</h2>
            <ol>
              {instructionList.map((instruction, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={instruction}
                    onChange={(e) =>
                      handleInstructionChange(index, e.target.value)
                    }
                  />
                </li>
              ))}
            </ol>
            <button type="button" onClick={handleAddInstruction}>
              Add Instruction
            </button>
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default CreateRecipe;
