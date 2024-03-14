import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../search/SearchBar";
import FiltersButton from "../filter/FiltersButton";
// import "./SpecificStore.css";

const SpecificStore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("storeid");

  useEffect(() => {
    const fetchSpecificStore = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/SpecificStore/${id}`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSpecificStore();
    console.log("Specific store id:", products);
  }, []);

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
                <td>{product.product_name}</td>
                <td>{product.product_type}</td>
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
