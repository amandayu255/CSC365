import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SearchBar from "../search/SearchBar";

const GroceryStore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [groceries, setGroceries] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const res = await axios.get("http://localhost:8800/GroceryStore");
        setGroceries(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGroceries();
  }, []);

  return (
    <div className="grocerystore-container">
      <header>
        <h1>Grocery Stores</h1>
      </header>

      <SearchBar onSearch={handleSearch} />

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
            <tr key={grocery.store_id}>
              <td>
                <Link to={`/SpecificStore/?storeid=${grocery.store_id}`}>
                  {grocery.store_id}
                </Link>
              </td>
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
