import React from 'react';
import './Product.css';

const Product = ({ product }) => (
  <div className="product-card">
    <div>{product.brand}</div>
    <div>{product.id}</div>
    <div>{product.price}</div>
    <div>{product.product}</div>
  </div>
);
export default Product;
