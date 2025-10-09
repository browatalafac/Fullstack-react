import React, { useState, useEffect } from "react";
import CartHeader from "../organisms/Car/CartHeader";
import CartItem from "../organisms/Car/CartItem";
import CartSummary from "../organisms/Car/CartSummary";
import "../organisms/Car/Car.css";
import First from "../organisms/First";
import TopBar from "../organisms/TopBar";
import Footer from "../organisms/Footer";

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleRemove = (code) => {
    const updatedProducts = products.filter((p) => p.code !== code);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleClearCart = () => {
    setProducts([]);
    localStorage.removeItem("products");
  };

  
  const subtotal = products.reduce((sum, p) => sum + Number(p.price.replace(/\D/g, "")), 0);
  const shipping = 3000;
  const total = subtotal + shipping;

  return (
    <>
      <TopBar/>
      <First/>
      <CartHeader />
      <main id="cart-container">
        <section className="cart-items">
          {products.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            products.map((p) => (
              <CartItem
                key={p.code}
                product={p}
                onRemove={() => handleRemove(p.code)}
              />
            ))
          )}
        </section>

        <CartSummary
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          onClearCart={handleClearCart}
        />
      </main>
      <Footer/>
    </>
  );
}
