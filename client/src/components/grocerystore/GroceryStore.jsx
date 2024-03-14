import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SearchBar from "../search/SearchBar";
import "./GroceryStore.css";
import SpecificStore from "./SpecificStore";

const GroceryStore = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const res = await axios.get("http://localhost:8800/grocery");
        setGroceries(res.data);
      } catch (error) {
        console.log(err);
      }
    };
  }, []);

  return (
    <div className="grocerystore-container">
      <header>
        <h1>Grocery Stores</h1>
      </header>

      <SearchBar onSearch={handleSearch} />
      {/* <FiltersButton onClick={handleFiltersClick} /> */}
      <Link to="/SpecificStore"><button>SpecificStore button test</button></Link>

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="600">Store ID</th>
            <th width="600">Name</th>
            <th width="600">Street Address</th>
            <th width="600">City</th>
            <th width="600">State</th>
            <th width="600">Zip Code</th>
          </tr>
        </thead>

        <tbody>
          {groceries.map((grocery) => (
            <tr key={grocery.id}>
              <td>{grocery.name}</td>
              <td>{grocery.street_address}</td>
              <td>{grocery.city}</td>
              <td>{grocery.state}</td>
              <td>{grocery.zip_code}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GroceryStore;
