import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { parse, format } from "date-fns"; // Import format function

const CookingHist = () => {
  const [cookinghist, setCookingHist] = useState([]);

  useEffect(() => {
    const fetchCookingHist = async () => {
      try {
        const res = await axios.get("http://localhost:8800/CookHist");
        console.log("Fetched cooking history data:", res.data);

        // Format the date field in each item of the fetched data
        const formattedData = res.data.map((item) => ({
          ...item,
          date: format(new Date(item.date), "yyyy-MM-dd"), // Format date
        }));

        setCookingHist(formattedData); // Set the formatted data in state
      } catch (error) {
        console.log("Error fetching cooking history data:", error);
      }
    };

    fetchCookingHist();
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
              <td>{cookinghis.recipe_id}</td>
              <td>{cookinghis.user_id}</td>
              <td>{cookinghis.cook_id}</td>
              <td>{cookinghis.date.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CookingHist;
