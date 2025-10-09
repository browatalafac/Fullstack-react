import React from "react";

export default function CartSummary({ subtotal, shipping, total, clearCart }) {
  return (
    <aside className="cart-summary">
      <h2>Resumen de compra</h2>
      <p>
        Subtotal: <span>${subtotal.toLocaleString()}</span>
      </p>
      <p>
        Envío: <span>${shipping.toLocaleString()}</span>
      </p>
      <hr />
      <p className="total">
        Total: <span>${total.toLocaleString()}</span>
      </p>
      <button className="checkout-btn">Finalizar Compra</button>
      <button
        className="checkout-btn"
        style={{ marginTop: "0.5rem", background: "#e63946" }}
        onClick={clearCart}
      >
        Vaciar Carrito
      </button>
    </aside>
  );
}
