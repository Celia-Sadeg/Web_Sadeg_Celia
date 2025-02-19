import React from "react";
import "./App.css";

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price} €</p>
      <button className="add-to-cart-btn">Ajouter au panier</button>
    </div>
  );
}

export default ProductCard;
