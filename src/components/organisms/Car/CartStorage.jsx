import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function CartStorage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const removeProduct = (code) => {
    const updatedProducts = products.filter((p) => p.code !== code);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const clearCart = () => {
    setProducts([]);
    localStorage.removeItem("products");
  };

  const subtotal = products.reduce((sum, p) => sum + Number(p.price), 0);
  const shipping = products.length ? 5000 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-container">
      <div className="cart-items">
        {products.length ? (
          products.map((p) => (
            <CartItem
              key={p.code}
              product={p}
              removeProduct={removeProduct}
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
      />
    </div>
  );
}
