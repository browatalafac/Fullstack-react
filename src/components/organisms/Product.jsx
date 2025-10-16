import React from "react";

export default function Product({ code, image, name, description, price }) {
  const addToCart = (product) => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    alert(`${product.name} agregado al carrito`);
  };

  return (
    <div className="pastel-item">
      <div
        className="pastel"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="pastel-name">{name}</p>
      <p className="pastel-price">${price}</p>
      <button className="btn" onClick={() => addToCart({ code, image, name, description, price })}>
        Agregar al carrito
      </button>
    </div>
  );
}
