import React, { useState, useEffect } from "react";

const Shop = () => {
  const [storeData, setStoreData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setStoreData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {storeData.map((item) => {
        return (
          <div
           key={item.id}
            style={{
              width: "250px",
              backgroundColor: "#f0f8ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", height: "50px", overflow: "hidden" }}>
              {item.title}
            </h3>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
            <p style={{ fontSize: "0.9rem", height: "100px", overflow: "hidden" }}>
              {item.description}
            </p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              Price: ${item.price}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
