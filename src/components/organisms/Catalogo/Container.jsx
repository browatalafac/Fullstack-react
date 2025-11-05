import React, { useState, useEffect } from "react";
import ProductoService from "../services/ProductoService"; 

export default function Container() {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);

  //  Cargar productos desde el backend Spring
  useEffect(() => {
    ProductoService.getAllProductos()
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  //  Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("products")) || [];
    setCart(savedCart);
  }, []);

  // Agregar producto al carrito
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };

  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div className="item" key={producto.id}>
            <img
              src={producto.imagenUrl}
              alt={producto.nombre}
              className="product-image"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <h3 className="name">{producto.nombre}</h3>
            <p className="price">${producto.precio} CLP</p>
            <button
              className="btn"
              onClick={() =>
                addToCart({
                  code: producto.id,
                  name: producto.nombre,
                  price: producto.precio,
                  image: producto.imagenUrl,
                })
              }
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
