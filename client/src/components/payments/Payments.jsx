import React from "react";
import Table from "react-bootstrap/Table";
import "./Payments.css";

const Payments = () => {
  return (
    <div className="payments-container">
        <h1>Payments</h1>
        <Table stripped bordered hover size="sm">
          <thead>
            <tr>
              <th width="427">Product</th>
              <th width="427">Price</th>
              <th width="427">Who Pays?</th>
              <th width="427">Paid Back?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ice cream</td>
              <td>11</td>
              <td>Annie</td>
              <td>Poppy</td>
            </tr>

          </tbody>
        </Table>
    </div>
  );
};

export default Payments;
