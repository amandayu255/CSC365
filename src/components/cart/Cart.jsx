import React from "react";
import Table from "react-bootstrap/Table";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
        <h1>Shopping Cart</h1>
        <Table stripped bordered hover size="sm">
          <thead>
            <tr>
              <th width="427">Ingredient</th>
              <th width="427">Store</th>
              <th width="427">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rakesh</td>
              <td>1123</td>
              <td>CSE</td>
            </tr>

          </tbody>
        </Table>
    </div>
  );
};

export default Cart;
