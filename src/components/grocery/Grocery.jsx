import React from "react";
import Table from "react-bootstrap/Table";
import "./Grocery.css";

const Grocery = () => {
  return (
    <div className="grocery-container">
      <h1>Grocery</h1>
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
        </tbody>
      </Table>
    </div>
  );
};

export default Grocery;
