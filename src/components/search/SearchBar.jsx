import React, { useState } from "react";
import "./SearchBar.css";
import FiltersButton from "../filter/FiltersButton";
import searchIcon from "./search-icon.svg";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleSearchIconClick = () => {
    console.log("Search icon clicked!");
  };

  return (
    <div>
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <div className="search-icon-container" onClick={handleSearchIconClick}>
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
      </div>
    </form>
    <FiltersButton />
    </div>
  );
};

export default SearchBar;
