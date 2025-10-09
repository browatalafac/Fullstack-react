
import React from "react";

export default function CartItem({ product, removeProduct }) {
  const { code, image, name, description, price } = product;

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="item-info">
        <h2>{name}</h2>
        <p className="price">{price}</p>
        <p className="desc">{description}</p>
      </div>
      <div className="item-actions">
        <span className="quantity">x1</span>
        <button className="remove-btn" onClick={() => removeProduct(code)}>
          ✖
        </button>
      </div>
    </div>
  );
}
