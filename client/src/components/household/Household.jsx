import React from "react";
import { Link } from "react-router-dom";

const Household = () => {
  return (
    <div className="household-container">
      <header>
        <h1>Household</h1>
      </header>

      <main>
        <h3>House ID: #</h3>
        <h4>Housemates</h4>
        <p>1. Alex</p>
        <p>2. Alice</p>

        <button>Leave</button>
      </main>
    </div>
  );
};

const NotInHousehold = () => {
  return (
    <div className="not-in-household-container">
      <header>
        <h1>Not in Any Household</h1>
      </header>

      <main>
        <p>You are currently not part of any household.</p>
        <Link to="/CreateHousehold">Create Household</Link>
      </main>
    </div>
  );
};

const Home = ({ isInHousehold }) => {
  return isInHousehold ? <Household /> : <NotInHousehold />;
};

export default Home;
