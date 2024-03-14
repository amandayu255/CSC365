import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import SearchBar from "../search/SearchBar";
import "./Storage.css";

const Storage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  return (
    <div className="home-container">
      <header>
        <h1>Fridge/Pantry</h1>
      </header>

      <SearchBar onSearch={handleSearch} />

      <main>
        <Table stripped bordered hover size="sm">
          <thead>
            <tr>
              <th width="427">Name</th>
              <th width="427">Duration</th>
              <th width="427">Buy Date</th>
              <th width="427">Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ice cream</td>
              <td>11</td>
              <td>Annie</td>
              <td>Poppy</td>
            </tr>

            <tr>
              <td>Ice cream</td>
              <td>11</td>
              <td>Annie</td>
              <td>Poppy</td>
            </tr>
          </tbody>
        </Table>
      </main>
    </div>
  );
};

export default Storage;
