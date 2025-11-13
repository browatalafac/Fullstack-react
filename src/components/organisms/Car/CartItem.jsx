
import React from "react";

export default function CartItem({ product, removeProduct }) {
  const { carritoItemId, imagenUrl, nombre, descripcion, precio } = product;

  return (
    <div className="cart-item">
      <img src={imagenUrl} alt={nombre} />
      <div className="item-info">
        <h2>{nombre}</h2>
        <p className="price">{precio}</p>
        <p className="desc">{descripcion}</p>
      </div>
      <div className="item-actions">
        <span className="quantity">x{product.cantidad || 1}</span>
        <button className="remove-btn" onClick={() => removeProduct(carritoItemId)}>
          ✖
        </button>
      </div>
    </div>
  );
}
