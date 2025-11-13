import React from "react";
import CompraService from "../../../services/CompraService";

// Recibimos la nueva prop 'setProducts'
export default function CartSummary({ subtotal, shipping, total, clearCart, setProducts }) {

  const handleCheckout = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
      alert("⚠️ Debes iniciar sesión antes de comprar.");
      return;
    }

    if (subtotal === 0) {
      alert("🛒 Tu carrito está vacío.");
      return;
    }

    const request = {
      usuarioId: usuario.id,
    };

    try {
      // 1. Llamamos al backend. Él guarda la compra y vacía el carrito.
      await CompraService.saveCompra(request);
      alert("✅ Compra registrada correctamente 🎉");

      // 2. Ya no llamamos a clearCart(). Simplemente actualizamos la UI.
      // Esto limpia la lista de productos en la pantalla inmediatamente.
      setProducts([]);

    } catch (error) {
      console.error("❌ Error al registrar la compra:", error);
      alert("⚠️ No se pudo registrar la compra. Inténtalo más tarde.");
    }
  };

  return (
    <aside className="cart-summary">
      <h2>Resumen de compra</h2>
      <p>Subtotal: <span>${subtotal.toLocaleString()}</span></p>
      <p>Envío: <span>${shipping.toLocaleString()}</span></p>
      <hr />
      <p className="total">Total: <span>${total.toLocaleString()}</span></p>

      <button className="checkout-btn" onClick={handleCheckout}>
        Finalizar Compra
      </button>

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
