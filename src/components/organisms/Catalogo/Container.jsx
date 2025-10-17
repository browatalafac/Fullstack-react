import React, { useState, useEffect } from "react";

export default function Container() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("products")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("products", JSON.stringify(updatedCart));
    
  };

  return (
    <div className="container">
      {/* Primera fila */}
      <div className="row">
        <div className="category">
          <h2 className="category-title">Tortas Cuadradas</h2>
          <div className="item">
            <div className="img img-TC001"></div>
            <h3 className="name">Torta Cuadrada de Chocolate</h3>
            <p className="price">$45.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "1",
              name: "Torta Cuadrada de Chocolate",
              price: "45000"
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-TC002"></div>
            <h3 className="name">Torta Cuadrada de Frutas</h3>
            <p className="price">$50.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "2",
              name: "Torta Cuadrada de Frutas",
              price: "50000"
            })}>Agregar al carrito</button>
          </div>
        </div>

        <div className="category">
          <h2 className="category-title">Tortas Circulares</h2>
          <div className="item">
            <div className="img img-TT001"></div>
            <h3 className="name">Torta Circular de Vainilla</h3>
            <p className="price">$40.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "4",
              name: "Torta Circular de Vainilla",
              price: "40000"
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-TT002"></div>
            <h3 className="name">Torta Circular de Manjar</h3>
            <p className="price">$42.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "5",
              name: "Torta Circular de Manjar",
              price: "42000"
            })}>Agregar al carrito</button>
          </div>
        </div>

        <div className="category">
          <h2 className="category-title">Postres Individuales</h2>
          <div className="item">
            <div className="img img-PI001"></div>
            <h3 className="name">Mousse de Chocolate</h3>
            <p className="price">$5.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "6",
              name: "Mousse de Chocolate",
              price: "5000"
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PI002"></div>
            <h3 className="name">Tiramisú Clásico</h3>
            <p className="price">$5.500 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "7",
              name: "Tiramisú Clásico",
              price: "5500"
            })}>Agregar al carrito</button>
          </div>
        </div>
      </div>

      {/* Segunda fila */}
      <div className="row">
        <div className="category">
          <h2 className="category-title">Productos Sin Azúcar</h2>
          <div className="item">
            <div className="img img-PSA001"></div>
            <h3 className="name">Torta Sin Azúcar de Naranja</h3>
            <p className="price">$48.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "8",
              name: "Torta Sin Azúcar de Naranja",
              price: "48000"
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PSA002"></div>
            <h3 className="name">Cheesecake Sin Azúcar</h3>
            <p className="price">$47.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "9",
              name: "Cheesecake Sin Azúcar",
              price: "47000"
            })}>Agregar al carrito</button>
          </div>
        </div>

        <div className="category">
          <h2 className="category-title">Pastelería Tradicional</h2>
          <div className="item">
            <div className="img img-PT001"></div>
            <h3 className="name">Empanada de Manzana</h3>
            <p className="price">$3.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "11",
              name: "Empanada de Manzana",
              price: "3000"
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PT002"></div>
            <h3 className="name">Tarta de Santiago</h3>
            <p className="price">$6.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "3", // Manteniendo el mismo ID que en Home
              name: "Tarta de Santiago",
              price: "6000"
            })}>Agregar al carrito</button>
          </div>
        </div>

        <div className="category">
          <h2 className="category-title">Productos Sin Gluten</h2>
          <div className="item">
            <div className="img img-PG001"></div>
            <h3 className="name">Brownie Sin Gluten</h3>
            <p className="price">$4.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "12",
              name: "Brownie Sin Gluten",
              price: "4000"
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PG002"></div>
            <h3 className="name">Pan Sin Gluten</h3>
            <p className="price">$3.500 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "13",
              name: "Pan Sin Gluten",
              price: "3500"
            })}>Agregar al carrito</button>
          </div>
        </div>
      </div>

      {/* Tercera fila */}
      <div className="row row-last">
        <div className="category">
          <h2 className="category-title">Productos Veganos</h2>
          <div className="item">
            <div className="img img-PV001"></div>
            <h3 className="name">Torta Vegana de Chocolate</h3>
            <p className="price">$50.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "14",
              name: "Torta Vegana de Chocolate",
              price: "50000"
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PV002"></div>
            <h3 className="name">Galletas Veganas de Avena</h3>
            <p className="price">$4.500 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "15",
              name: "Galletas Veganas de Avena",
              price: "4500"
            })}>Agregar al carrito</button>
          </div>
        </div>

        <div className="category">
          <h2 className="category-title">Tortas Especiales</h2>
          <div className="item">
            <div className="img img-TE001"></div>
            <h3 className="name">Torta Especial de Cumpleaños</h3>
            <p className="price">$55.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "16",
              name: "Torta Especial de Cumpleaños",
              price: "55000"
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-TE002"></div>
            <h3 className="name">Torta Especial de Boda</h3>
            <p className="price">$60.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "17",
              name: "Torta Especial de Boda",
              price: "60000"
            })}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}
