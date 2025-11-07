import React from "react";
import CompraService from "../../../services/CompraService";

export default function CartSummary({ subtotal, shipping, total, clearCart }) {
  // 🧾 Función para registrar la compra en el backend
  const handleCheckout = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const cart = JSON.parse(localStorage.getItem("products")) || [];

    // 🔒 Verificar login
    if (!usuario) {
      alert("⚠️ Debes iniciar sesión antes de comprar.");
      return;
    }

    // 🛒 Verificar carrito vacío
    if (cart.length === 0) {
      alert("🛒 Tu carrito está vacío.");
      return;
    }

    // 🧩 Crear el cuerpo de la solicitud
    const request = {
      usuarioId: usuario.id,
      detalles: cart.map((p) => ({
        productoId: p.code, // si tu backend usa "id", cámbialo por p.id
        cantidad: p.cantidad || 1,
        precioUnitario: p.price
      }))
    };

    console.log("📦 Enviando compra al backend:", request);

    try {
      await CompraService.saveCompra(request);
      alert("✅ Compra registrada correctamente 🎉");

      // 🧹 Limpiar carrito después de comprar
      localStorage.removeItem("products");
      clearCart();
    } catch (error) {
      console.error("❌ Error al registrar la compra:", error);
      alert("⚠️ No se pudo registrar la compra. Inténtalo más tarde.");
    }
  };

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

      {/* 🛍️ Finalizar compra */}
      <button className="checkout-btn" onClick={handleCheckout}>
        Finalizar Compra
      </button>

      {/* 🗑️ Vaciar carrito */}
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
