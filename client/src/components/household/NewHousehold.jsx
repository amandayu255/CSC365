import React, { useState } from "react";
import "./NewHousehold.css"

const NewHousehold = () => {
  const [householdID, setHouseholdID] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  const handleCreateHousehold = async (event) => {
    event.preventDefault();

    if (isJoining) {
      try {
        const response = await fetch(
          `http://localhost:8800/households/${householdID}/join`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          console.log("Successfully joined household:", householdID);
        } else {
          console.error("Failed to join household:", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred while joining household:", error);
      }
    } else {
      try {
        const response = await fetch(
          "http://localhost:8800/households/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ householdID }),
          }
        );

        if (response.ok) {
          console.log("Successfully created household:", householdID);
        } else {
          console.error("Failed to create household:", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred while creating household:", error);
      }
    }
  };

  return (
    <div className="create-household-container">
      <header>
        <h1>{isJoining ? "Join Household" : "Create Household"}</h1>
      </header>
      <main>
        <form onSubmit={handleCreateHousehold}>
          <label>
            {isJoining ? "Household ID:" : "New Household ID:"}
            <input
              type="text"
              value={householdID}
              onChange={(e) => setHouseholdID(e.target.value)}
              placeholder={
                isJoining ? "Enter household ID" : "Enter new household ID"
              }
              required
            />
          </label>
          <button type="submit">{isJoining ? "Join" : "Create"}</button>
        </form>
        <div>
          <button onClick={() => setIsJoining(!isJoining)}>
            {isJoining ? "Create New Household" : "Join Existing Household"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default NewHousehold;
