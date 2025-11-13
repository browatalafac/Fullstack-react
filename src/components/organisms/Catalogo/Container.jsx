import React, { useState, useEffect } from "react";
import ProductoService from "../../../services/ProductoService";
// 1. --- ¡IMPORTAR EL SERVICIO DEL CARRITO! ---
import CarritoService from "../../../services/CarritoService";

// Catálogo local por defecto (esto sigue igual)
const defaultCatalog = [
  // ... tu catálogo
];

export default function Container() {
  const [productos, setProductos] = useState([]);
  // Ya no necesitamos un estado 'cart' local, el servidor es la fuente de verdad.
  // const [cart, setCart] = useState([]); 
  const [mensaje, setMensaje] = useState("");

  // Cargar productos (esto sigue igual)
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

  // Ya no necesitamos cargar el carrito desde localStorage, lo eliminamos.
  /*
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("products")) || [];
    setCart(savedCart);
  }, []);
  */

  // 2. --- ¡FUNCIÓN 'addToCart' COMPLETAMENTE RECONSTRUIDA! ---
  const addToCart = async (producto) => { // La convertimos en una función 'async'
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    // Verificación de login (sigue igual)
    if (!usuario) {
      setMensaje("⚠️ Debes iniciar sesión para agregar productos");
      setTimeout(() => setMensaje(""), 2500);
      return;
    }

    // 3. --- ¡CONSTRUIR EL CUERPO DE LA PETICIÓN COMO ESPERA SPRING! ---
    const itemParaEnviar = {
      usuario: { id: usuario.id },
      producto: { id: producto.id }, // Usamos el ID del producto
      cantidad: 1 // Siempre agregamos de a uno
    };

    console.log("Enviando al backend:", itemParaEnviar); // Línea para depurar

    try {
      // 4. --- LLAMAR AL SERVICIO PARA ENVIAR EL ITEM AL SERVIDOR ---
      await CarritoService.agregarItemAlCarrito(itemParaEnviar);

      // 5. --- MOSTRAR MENSAJE DE ÉXITO Y NOTIFICAR A OTROS COMPONENTES ---
      setMensaje(`✅ ${producto.nombre} agregado al carrito`);
      setTimeout(() => setMensaje(""), 2000);

      // Este evento es útil para que el header (si muestra un contador) se actualice.
      window.dispatchEvent(new Event("cartUpdated"));

    } catch (error) {
      // 6. --- MANEJAR ERRORES DE LA API ---
      console.error("❌ Error al agregar el producto:", error);
      let errorMsg = "No se pudo agregar el producto. Inténtalo más tarde.";
      if (error.response && error.response.status === 400) {
        errorMsg = "Hubo un problema con los datos del producto.";
      }
      setMensaje(`⚠️ ${errorMsg}`);
      setTimeout(() => setMensaje(""), 3000);
    }
  };

  const cardTitleOverrides = {};
  const groupTitles = [
    "Tortas Cuadradas",
    "Tortas Circulares",
    "Postres Individuales",
    "Productos sin Azúcar",
    "Pastelería Tradicional",
    "Productos sin Gluten",
    "Productos Veganos",
    "Tortas Especiales"
  ];

  const pares = [];
  for (let i = 0; i < productos.length; i += 2) {
    pares.push(productos.slice(i, i + 2));
  }

  return (
    <div className="container catalog-container">

      {mensaje && (
        <div className={`catalog-toast ${mensaje.includes("⚠️") ? "warning" : "success"}`}>
          {mensaje}
        </div>
      )}

      <div className="row catalog-grid">
        {pares.map((par, idx) => {
          const pairKey = (par || []).map((p) => p?.id).filter((x) => x != null).join("-") || `pair-${idx}`;
          const titleValue = cardTitleOverrides[pairKey] ?? groupTitles[idx] ?? `Grupo ${idx + 1}`;
          return (
            <div key={idx} className="catalog-card">
              <h3 className="catalog-card-title">{titleValue}</h3>
              <p className="catalog-card-subtitle">
                {par.map((p) => p?.nombre).filter(Boolean).join(", ")}
              </p>
              <div className="catalog-card-products">
                {par.map((producto) => (
                  <div key={producto.id} className="catalog-product">
                    <div>
                      <img className="catalog-product-image" src={producto.imagenUrl} alt={producto.nombre} />
                      <h4 className="catalog-product-name">{producto.nombre}</h4>
                      <p className="catalog-product-price">
                        ${producto.precio.toLocaleString()} CLP
                      </p>
                    </div>

                    <button
                      className="btn"
                      /* ...tus estilos */
                      onClick={() =>
                        addToCart({
                          id: producto.id,
                          nombre: producto.nombre
                        })
                      }
                    >
                      🛒 Agregar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
       {/* ... */}
    </div>
  );
}