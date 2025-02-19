import React, { useState } from "react";

function App() {
  // Liste de produits (stockée directement dans le code)
  const [products] = useState([
    { id: 1, name: "T-shirt", price: 20, description: "T-shirt de qualité" },
    { id: 2, name: "Jeans", price: 40, description: "Jeans stylé" },
    { id: 3, name: "Chaussures", price: 60, description: "Chaussures confortables" },
  ]);

  // État pour le panier
  const [cart, setCart] = useState([]);

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Calculer le total du panier
  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Site E-commerce</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Section Produits */}
        <div style={{ flex: 1 }}>
          <h2>Produits</h2>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Prix : {product.price} €</p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  padding: "5px 10px",
                  background: "blue",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>

        {/* Section Panier */}
        <div style={{ flex: 1 }}>
          <h2>Panier</h2>
          {cart.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <h3>{item.name}</h3>
                <p>Prix : {item.price} €</p>
              </div>
            ))
          )}
          <h3>Total : {getTotal()} €</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
