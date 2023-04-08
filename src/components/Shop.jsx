import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";

const Shop = () => {
  const productData = useLoaderData();
  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
