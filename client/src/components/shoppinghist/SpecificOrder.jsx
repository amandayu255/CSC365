import React from "react";

const SpecificOrder = () => {
  const order = {
    storeName: "Grocery Store Name",
    date: "2024-03-15",
    products: [
      { name: "Product 1", price: 10 },
      { name: "Product 2", price: 15 },
      { name: "Product 3", price: 20 },
    ],
  };

  const calculateTotal = () => {
    return order.products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="specific-order-container">
      <header>
        <h1>{order.storeName}</h1>
        <p>
          <strong>Date: </strong>
          {order.date}
        </p>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th width="600px">Product</th>
              <th width="600px">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
            <br></br>
            <tr className="total-row">
              <td>
                <strong>Total</strong>
              </td>
              <td>${calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SpecificOrder;
