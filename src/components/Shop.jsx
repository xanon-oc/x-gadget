import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import addToDb from "../Utils/fakeDB";

const Shop = () => {
  // card button handler

  const handleAddToCart = (id) => {
    addToDb(id);
  };

  const productData = useLoaderData();
  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard
          handleAddToCart={handleAddToCart}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Shop;
