import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const CookingHist = () => {
  const [cookinghist, setCookingHist] = useState([]);

  useEffect(() => {
    const fetchCookingHist = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cookinghist");
        setCookingHist(res.data);
      } catch (error) {
        console.log(err);
      }
    };
  }, []);

  return (
    <div className="cookinghist-container">
      <header>
        <h1>Cooking History</h1>
      </header>

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="600">Recipe ID</th>
            <th width="600">User ID</th>
            <th width="600">Cook ID</th>
            <th width="600">Date</th>
          </tr>
        </thead>

        <tbody>
          {cookinghist.map((cookinghis) => (
            <tr key={cookinghis.recipe_id}>
              <td>{cookinghis.user_id}</td>
              <td>{cookinghis.cook_id}</td>
              <td>{cookinghis.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CookingHist;
