import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import SearchBar from "../search/SearchBar";
import "./Grocery.css";

const Grocery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  return (
    <div className="grocery-container">
      <header>
        <h1>Grocery Stores</h1>
      </header>

      <SearchBar onSearch={handleSearch} />
      {/* <FiltersButton onClick={handleFiltersClick} /> */}

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="427">Name</th>
            <th width="750">Address</th>
            <th width="427">Distance Away</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ice cream</td>
            <td>11</td>
            <td>Annie</td>
          </tr>

          <tr>
            <td>Ice cream</td>
            <td>11</td>
            <td>Annie</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Grocery;
