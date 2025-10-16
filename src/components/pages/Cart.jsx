import React from "react";
import TopBar from "../organisms/TopBar";
import First from "../organisms/First";
import Footer from "../organisms/Footer";
import CartHeader from "../organisms/Car/CartHeader";
import CartStorage from "../organisms/Car/CartStorage";
import "../organisms/Car/Car.css";

export default function Cart() {
  return (
    <div className="car-root">
      <TopBar />
      <First />
      <CartHeader />
      <CartStorage />
      <Footer />
    </div>
  );
}
