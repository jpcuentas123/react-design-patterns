import React from "react";

interface Product {
  name: string;
  price: number;
  description: string;
  rating: number;
}

interface ProductListLargeProps {
  product: Product;
}
const ProductListLarge = ({ product }: ProductListLargeProps) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Price:</b> {price}
      </p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>
        <b>Average Rating:</b> {rating}
      </p>
    </>
  );
};

export default ProductListLarge;
