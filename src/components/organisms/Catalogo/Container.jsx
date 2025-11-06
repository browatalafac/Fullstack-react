import React, { useState, useEffect } from "react";
import ProductoService from "../../../services/ProductoService";


//Este es un catalogo de ejemplo en caso de que el backend no este funcionando
const defaultCatalog = [
  {
    id: "TC001",
    nombre: "Torta de Chocolate",
    precio: 18990,
    imagenUrl:
      "https://tortasdelacasa.com/wp-content/uploads/2024/02/DSC4340-scaled.jpg",
  },
  {
    id: "TC002",
    nombre: "Tarta de Frutas",
    precio: 15990,
    imagenUrl:
      "https://images.aws.nestle.recipes/original/2024_10_23T06_40_18_badun_images.badun.es_tarta_fria_de_chocolate_blanco_con_frutas.jpg",
  },
  {
    id: "TT001",
    nombre: "Torta de Vainilla",
    precio: 13990,
    imagenUrl:
      "https://tortamaniaecuador.com/wp-content/uploads/2022/12/Vainilla-con-crema-pequena-300x300.png",
  },
];


// Componente Container para mostrar el catálogo de productos
export default function Container() {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);

  //  Cargar productos desde el backend Spring
  useEffect(() => {
    ProductoService.getAllProductos()
      .then((response) => {
        console.log("Productos cargados:", response.data);
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
