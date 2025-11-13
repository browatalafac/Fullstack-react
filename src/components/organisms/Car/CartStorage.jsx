import React, { useState, useEffect, useMemo } from "react";import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CarritoService from "../../../services/CarritoService";

export default function CartStorage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Esta función está bien, no necesita cambios.
  const fetchCartItems = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) {
      setLoading(false);
      return;
    }

    try {
      const response = await CarritoService.getCarritoByUsuarioId(usuario.id);
      const items = response.data.map((item) => ({
        ...item.producto,
        cantidad: item.cantidad,
        carritoItemId: item.id,
      }));
      setProducts(items);
    } catch (error) {
      console.error("Error al cargar el carrito:", error);
      alert("No se pudo cargar el carrito desde el servidor.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Función para remover un solo ítem.
  const removeProduct = async (carritoItemIdToRemove) => {
    try {
      // ANTES: await CarritoService.limpiarCarritoCarrito(carritoItemIdToRemove);
      await CarritoService.eliminarItemDelCarrito(carritoItemIdToRemove); // <-- CORRECCIÓN 1: Nombre de función correcto.
      
      const updatedProducts = products.filter(
        (p) => p.carritoItemId !== carritoItemIdToRemove
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error al eliminar el item:", error);
      alert("No se pudo quitar el producto del carrito.");
    }
  };

  // Función para vaciar todo el carrito.
  const clearCart = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario) return;

    try {
      // ANTES: await CarritoService.limpiarCarritoDelUsuario(usuario.id);
      await CarritoService.limpiarCarrito(usuario.id); // <-- CORRECCIÓN 2: Nombre de función correcto.

      setProducts([]);
      alert("Carrito vaciado con éxito."); // Añadimos una alerta para confirmar
    } catch (error) {
      console.error("Error al limpiar el carrito:", error);
      alert("No se pudo vaciar el carrito.");
    }
  };

  // El cálculo con useMemo está perfecto. No necesita cambios.
  const { subtotal, shipping, total } = useMemo(() => {
    const calculatedSubtotal = products.reduce(
      (sum, p) => sum + (p.precio || 0) * (p.cantidad || 0),
      0
    );
    const calculatedShipping = calculatedSubtotal > 0 ? 5000 : 0;
    const calculatedTotal = calculatedSubtotal + calculatedShipping;
    return {
      subtotal: calculatedSubtotal,
      shipping: calculatedShipping,
      total: calculatedTotal,
    };
  }, [products]);

  if (loading) {
    return (
      <div className="cart-container">
        <p>Cargando carrito...</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {products.length > 0 ? (
          products.map((p) => (
            <CartItem
              key={p.carritoItemId}
              product={p}
              removeProduct={() => removeProduct(p.carritoItemId)}
            />
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
      
      <CartSummary
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        clearCart={clearCart}
        setProducts={setProducts} 
      />
    </div>
  );
}
