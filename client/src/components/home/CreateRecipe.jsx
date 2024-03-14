import React, { useState } from "react";
import "./CreateRecipe.css";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [instructionList, setInstructionList] = useState([]);

  const handleAddIngredient = () => {
    setIngredientList([...ingredientList, ""]);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      name,
      cookTime,
      ingredientList,
      instructionList,
    });
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
            Cook Time (in mins):
            <input
              type="text"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
            />
          </label>
          <div className="ingredients-section">
            <h2>Ingredients</h2>
            {ingredientList.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
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
