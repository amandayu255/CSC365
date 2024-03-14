import React from "react";

const SpecificRecipe = () => {
  return (
    <div className="specific-recipe-container">
      <header>
        {/* <h1>Specific Recipe</h1> */}
        <h1>Name of Recipe:</h1>
      </header>
      <main>
        <section className="ingredients-section">
          <h2>Ingredients</h2>
          <ul>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </section>
        <section className="cooking-time-section">
          <h2>Cooking Time</h2>
          <p>30 minutes</p>
        </section>
        <section className="instructions-section">
          <h2>Instructions</h2>
          <ol>
            <li>Step 1: Instruction 1</li>
            <li>Step 2: Instruction 2</li>
            <li>Step 3: Instruction 3</li>
          </ol>
        </section>
        <section className="nutrition-section">
          <h2>Nutrition Label:</h2>
          <ul>
            <li>Calories: 300</li>
            <li>Sugar: 10g</li>
            <li>Cholesterol:</li>
            <li>Sodium: 10g</li>
            <li>Serving size:</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default SpecificRecipe;
