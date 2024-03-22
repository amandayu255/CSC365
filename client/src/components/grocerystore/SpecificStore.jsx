import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../search/SearchBar";

const SpecificStore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [storeInfo, setStoreInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("storeid");

  useEffect(() => {
    const fetchSpecificStore = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/SpecificStore/${id}`
        );
        setStoreInfo(res.data.storeInfo);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSpecificStore();
  }, [id]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Search query:", query);
    // Perform search logic here and update products state
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log("Button clicked");
  };

  return (
    <div className="specific-store-container">
      <header>
        <h1>{storeInfo.name}</h1>
        <p>
          <strong>Address: </strong>
          {storeInfo.street_address}, {storeInfo.city}, {storeInfo.state},{" "}
          {storeInfo.zip_code}
        </p>
      </header>
      <main>
        <div className="search-bar-container">
          <SearchBar />
          <button onClick={handleButtonClick}>Filter</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.product_name}</td>
                <td>{product.product_type}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SpecificStore;
