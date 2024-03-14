import React, { useState } from "react";
import SearchBar from "../search/SearchBar";
import FiltersButton from "../filter/FiltersButton";
// import "./SpecificStore.css";

const SpecificStore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
    // Perform search logic here and update products state
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log("Button clicked");
  };

  return (
    <div className="specific-store-container">
      <header>
        <h1>Grocery Store Name</h1>
        <p>Address: </p>
      </header>
      <main>
        <div className="search-bar-container">
          <SearchBar />
          <button onClick={handleButtonClick}>Filter</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SpecificStore;
