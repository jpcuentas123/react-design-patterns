import React from "react";

interface Product {
  name: string;
  price: number;
}

interface ProductListSmallProps {
  product: Product;
}

const ProductListSmall = ({ product }: ProductListSmallProps) => {
  const { name, price } = product;
  return (
    <p>
      {name} - {price}
    </p>
  );
};

export default ProductListSmall;
