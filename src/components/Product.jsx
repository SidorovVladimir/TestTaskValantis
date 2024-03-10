import React from 'react';
import './Product.css';

const Product = ({ product }) => (
  <div className="product">
    <div className="product-card__brand">
      Бренд:
      {' '}
      {product.brand || 'Не указан'}
    </div>
    <h3 className="product-card__title">{product.product}</h3>
    <span className="product-card__price">
      Цена:
      {' '}
      {product.price}
    </span>
    <span className="product-card__id">
      id:
      {' '}
      {product.id}
    </span>
  </div>
);
export default Product;
