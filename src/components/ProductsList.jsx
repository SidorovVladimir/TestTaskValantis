import React from 'react';
import Product from './Product.jsx';
import './ProductsList.css';

const ProductsList = ({ products }) => (
  <div className="cards">
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

export default ProductsList;
