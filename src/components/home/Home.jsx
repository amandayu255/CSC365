import React, { useState } from "react";
import FiltersButton from "../filter/FiltersButton";
import SearchBar from "../search/SearchBar";
import "./Home.css"; 

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  const handleFiltersClick = () => {
    console.log("Filters button clicked");
  };

  return (
    <div className="home-container">
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <div className="search-and-filters">
          <SearchBar onSearch={handleSearch} />
          <FiltersButton onClick={handleFiltersClick} />
        </div>
      </main>
    </div>
  );
};

export default Home;
