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

  return (
    <div className="container" style={{ padding: "20px", position: "relative" }}>

      {/* El mensaje flotante sigue funcionando igual */}
      {mensaje && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            // ...el resto de tus estilos
            backgroundColor: mensaje.includes("⚠️") ? "#ff9800" : "#4caf50",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            zIndex: 999
          }}
        >
          {mensaje}
        </div>
      )}

      <div className="row" /* ...tus estilos */>
        {productos.map((producto) => (
          <div key={producto.id} /* ...tus estilos */>
            <div>
              {/* ...imagen, nombre, precio... */}
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
              /* ...tus estilos */
              // 7. --- AJUSTAR EL OBJETO QUE SE PASA A 'addToCart' ---
              onClick={() =>
                addToCart({
                  id: producto.id, // Pasamos el objeto producto completo o al menos el ID
                  nombre: producto.nombre
                })
              }
            >
              🛒 Agregar
            </button>
          </div>
        ))}
      </div>
       {/* ... */}
    </div>
  );
}