import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        {/* Main landing page */}
        <li>
          <a href="/home">Home</a>
        </li>
        {/* Fridge/Pantry page */}
        <li>
          <a href="/storage">Storage</a>
        </li>
        {/* Grocery Store page */}
        <li>
          <a href="/grocerystore">Grocery Stores</a>
        </li>
        {/* User profile */}
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
