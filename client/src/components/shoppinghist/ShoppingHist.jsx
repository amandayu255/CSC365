import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { format } from "date-fns";

const ShoppingHist = () => {
  const [shoppinghist, setShoppingHist] = useState([]);

  useEffect(() => {
    const fetchShoppingHist = async () => {
      try {
        const res = await axios.get("http://localhost:8800/ShoppingHist");

        const formattedData = res.data.map(item => ({
          ...item,
          purchase_date: format(new Date(item.purchase_date), "yyyy-MM-dd") // Format date
        }));

        setShoppingHist(formattedData); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchShoppingHist();
  }, []);

  return (
    <div className="shoppinghist-container">
      <header>
        <h1>Shopping History</h1>
      </header>

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="600">Order ID</th>
            <th width="600">Store ID</th>
            <th width="600">Bought by User</th>
            <th width="600">Product</th>
            <th width="600">Price</th>
            <th width="600">Date</th>
          </tr>
        </thead>

        <tbody>
          {shoppinghist.map((shoppinghis) => (
            <tr key={shoppinghis.order_id}>
              <td>{shoppinghis.order_id}</td>
              <td>{shoppinghis.store_id}</td>
              <td>{shoppinghis.bought_by_user}</td>
              <td>{shoppinghis.product}</td>
              <td>{shoppinghis.price}</td>
              <td>{shoppinghis.purchase_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShoppingHist;
