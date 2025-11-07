import React, { useState, useEffect } from "react";
import ProductoService from "../../../services/ProductoService";

// Catálogo local por defecto
const defaultCatalog = [
  { id: "TC001", nombre: "Torta de Chocolate", precio: 18990, imagenUrl: "https://tortasdelacasa.com/wp-content/uploads/2024/02/DSC4340-scaled.jpg" },
  { id: "TC002", nombre: "Tarta de Frutas", precio: 15990, imagenUrl: "https://images.aws.nestle.recipes/original/2024_10_23T06_40_18_badun_images.badun.es_tarta_fria_de_chocolate_blanco_con_frutas.jpg" },
  { id: "TT001", nombre: "Torta de Vainilla", precio: 13990, imagenUrl: "https://tortamaniaecuador.com/wp-content/uploads/2022/12/Vainilla-con-crema-pequena-300x300.png" },
  { id: "TT002", nombre: "Torta circular de Manjar", precio: 42000, imagenUrl: "https://rhenania.cl/wp-content/uploads/2020/12/CIRUELA-MANJAR-BLANCO.jpg" },
  { id: "PI001", nombre: "Mousse de Chocolate", precio: 5000, imagenUrl: "https://www.elinasaiach.com/wp-content/uploads/2022/04/Mousse-Chocolate-3.jpg" },
  { id: "PI002", nombre: "Tiramisú Clásico", precio: 5500, imagenUrl: "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/tiramisu-postre-italiano.jpg" }
];

export default function Container() {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // 🔹 Cargar productos (desde backend o catálogo por defecto)
  useEffect(() => {
    ProductoService.getAllProductos()
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setProductos(response.data);
        } else {
          setProductos(defaultCatalog);
        }
      })
      .catch(() => setProductos(defaultCatalog));
  }, []);

  // 🔹 Cargar carrito guardado en localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("products")) || [];
    setCart(savedCart);
  }, []);

  // 🛒 Agregar producto al carrito
  const addToCart = (product) => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    // 🔒 Verificar si el usuario está logeado
    if (!usuario) {
      setMensaje("⚠️ Debes iniciar sesión para agregar productos");
      setTimeout(() => setMensaje(""), 2500);
      return;
    }

    // ✅ Buscar si el producto ya existe en el carrito
    const existing = cart.find(p => p.code === product.code);

    let updatedCart;
    if (existing) {
      // Si existe, solo aumenta la cantidad
      updatedCart = cart.map(p =>
        p.code === product.code
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      );
    } else {
      // Si no existe, agregarlo con cantidad 1
      updatedCart = [...cart, { ...product, cantidad: 1, usuarioId: usuario.id }];
    }

    setCart(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));

    setMensaje(`✅ ${product.name} agregada al carrito`);
    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <div className="container" style={{ padding: "20px", position: "relative" }}>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Catálogo de Productos</h2>

      {/* 🧁 Mensaje flotante */}
      {mensaje && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: mensaje.includes("⚠️") ? "#ff9800" : "#4caf50",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            fontWeight: "bold",
            zIndex: 999,
            transition: "0.3s"
          }}
        >
          {mensaje}
        </div>
      )}

      <div
        className="row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        {productos.map((producto) => (
          <div
            key={producto.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              width: "230px",
              textAlign: "center",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <img
                src={producto.imagenUrl}
                alt={producto.nombre}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px"
                }}
              />
              <h4 style={{ margin: "10px 0 5px", fontSize: "16px" }}>{producto.nombre}</h4>
              <p style={{ fontWeight: "bold", color: "#333" }}>
                ${producto.precio.toLocaleString()} CLP
              </p>
            </div>

            <button
              className="btn"
              style={{
                marginTop: "10px",
                padding: "8px",
                backgroundColor: "#ff8b3d",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
              onClick={() =>
                addToCart({
                  code: producto.id,
                  name: producto.nombre,
                  price: producto.precio,
                  image: producto.imagenUrl
                })
              }
            >
              🛒 Agregar
            </button>
          </div>
        ))}
      </div>

      {productos.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
          Cargando productos...
        </p>
      )}
    </div>
  );
}
