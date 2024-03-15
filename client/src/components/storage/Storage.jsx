import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SearchBar from "../search/SearchBar";
import { format } from "date-fns"; 

const Storage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [groceries, setGroceries] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const res = await axios.get("http://localhost:8800/Grocery");
        const formattedData = res.data.map((item) => ({
          ...item,
          exp_date: format(new Date(item.exp_date), "yyyy-MM-dd"),
        }));
        setGroceries(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGroceries();
  }, []);

  return (
    <div className="home-container">
      <header>
        <h1>Fridge/Pantry</h1>
      </header>

      <SearchBar onSearch={handleSearch} />

      <main>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th width="200">House ID</th>
              <th width="200px">Order ID</th>
              <th width="1000px">Ingredient</th>
              <th width="200px">Storage</th>
              <th width="200px">Available</th>
              <th width="200px">Quantity</th>
              <th width="400px">Expiration Date</th>
            </tr>
          </thead>

          <tbody>
            {groceries.map((grocery) => (
              <tr key={grocery.house_id}>
                <td>{grocery.house_id}</td>
                <td>{grocery.order_id}</td>
                <td>{grocery.ingredient}</td>
                <td>{grocery.storage}</td>
                <td>{grocery.available}</td>
                <td>{grocery.quantity}</td>
                <td>{grocery.exp_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  );
};

export default Storage;
