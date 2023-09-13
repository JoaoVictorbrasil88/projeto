import React from 'react';
import '../styles/ProductCard.css'; 

const ProductCard = ({ product }) => {
  const { name, description, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-title">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">Preço: R$ {price}</p>
    </div>
  );
};

export default ProductCard;


