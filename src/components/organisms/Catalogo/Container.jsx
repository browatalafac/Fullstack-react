import React, { useState, useEffect } from "react";
import ProductoService from "../../../services/ProductoService";

// catálogo por defecto (en caso de que el backend no responda)
const defaultCatalog = [
  { id: "TC001", nombre: "Torta de Chocolate", precio: 18990, imagenUrl: "https://tortasdelacasa.com/wp-content/uploads/2024/02/DSC4340-scaled.jpg" },
  { id: "TC002", nombre: "Tarta de Frutas", precio: 15990, imagenUrl: "https://images.aws.nestle.recipes/original/2024_10_23T06_40_18_badun_images.badun.es_tarta_fria_de_chocolate_blanco_con_frutas.jpg" },
  { id: "TT001", nombre: "Torta de Vainilla", precio: 13990, imagenUrl: "https://tortamaniaecuador.com/wp-content/uploads/2022/12/Vainilla-con-crema-pequena-300x300.png" },
  { id: "TT002", nombre: "Torta circular de Manjar", precio: 42000, imagenUrl: "https://rhenania.cl/wp-content/uploads/2020/12/CIRUELA-MANJAR-BLANCO.jpg" },
  { id: "PI001", nombre: "Mousse de Chocolate", precio: 5000, imagenUrl: "https://www.elinasaiach.com/wp-content/uploads/2022/04/Mousse-Chocolate-3.jpg" },
  { id: "PI002", nombre: "Tiramisú Clásico", precio: 5500, imagenUrl: "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/tiramisu-postre-italiano.jpg" },
  { id: "PSA001", nombre: "Torta sin azúcar de naranja", precio: 48000, imagenUrl: "https://www.lomismoperosano.cl/wp-content/uploads/2022/01/receta-torta-panqueque-naranja.jpg" },
  { id: "PSA002", nombre: "Cheescake sin Azúcar", precio: 47000, imagenUrl: "https://www.hola.com/horizon/landscape/64c21cd97107-tarta-horno-queso-t.jpg" },
  { id: "PT001", nombre: "Empanada de Manzana", precio: 3000, imagenUrl: "https://cdn7.kiwilimon.com/recetaimagen/1366/960x640/2229.jpg.jpg" },
  { id: "PT002", nombre: "Tarta de Santiago", precio: 6000, imagenUrl: "https://jetextramar.com/wp-content/uploads/2021/11/tarta-de-santiago1-empresa-de-alimentos.jpg" },
  { id: "PG001", nombre: "Brownie sin gluten", precio: 4000, imagenUrl: "https://azucarledesma.com/wp-content/uploads/2024/01/20240131-BrownieLight.jpg" },
  { id: "PG002", nombre: "Pan sin Gluten", precio: 3500, imagenUrl: "https://dinkel.es/wp-content/uploads/2020/06/1041-Pan-sin-Gluten-2.png" },
  { id: "PV001", nombre: "Torta vegana de Chocolate", precio: 50000, imagenUrl: "https://luciapaula.com/wp-content/uploads/2023/01/Blog-1970-01-20-125839033.jpg" },
  { id: "PV002", nombre: "Galleta veganas de Avena", precio: 4500, imagenUrl: "https://i.blogs.es/8792e6/galletas-avea-tahina-datiles/840_560.jpg" },
  { id: "TE001", nombre: "Torta especial de Cumpleaños", precio: 55000, imagenUrl: "https://i.pinimg.com/originals/aa/a0/4f/aaa04fb61005c9fc6d748dee6eac76f3.jpg" },
  { id: "TE002", nombre: "Torta especial de Boda", precio: 60000, imagenUrl: "https://i.pinimg.com/474x/3b/bc/bb/3bbcbb826b865e5278f53a5b2661c2e5.jpg" }
];

// nombres de categoría
const categoriasMap = {
  TC: "Tortas Clásicas",
  TT: "Tortas Tradicionales",
  PI: "Postres Individuales",
  PSA: "Postres Sin Azúcar",
  PT: "Postres Tradicionales",
  PG: "Productos Sin Gluten",
  PV: "Productos Veganos",
  TE: "Tortas Especiales",
};

export default function Container() {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);

  // Cargar productos desde backend o usar defaultCatalog
  useEffect(() => {
    ProductoService.getAllProductos()
      .then((response) => {
        if (response.data && response.data.length > 0) {
          console.log("Productos cargados desde backend:", response.data);
          setProductos(response.data);
        } else {
          console.warn("Backend vacío, usando catálogo local");
          setProductos(defaultCatalog);
        }
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setProductos(defaultCatalog); // fallback local
      });
  }, []);

  // Cargar carrito desde localStorage
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

  // 🔍 Agrupar productos por prefijo del ID
  const productosPorCategoria = productos.reduce((grupos, prod) => {
    const prefijo = prod.id.match(/^[A-Z]+/)[0];
    if (!grupos[prefijo]) grupos[prefijo] = [];
    grupos[prefijo].push(prod);
    return grupos;
  }, {});

  return (
    <div className="container">

      {Object.keys(productosPorCategoria).map((prefijo) => (
        <div key={prefijo} style={{ marginBottom: "40px" }}>
          <h3 style={{ borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>
            {categoriasMap[prefijo] || prefijo}
          </h3>
          <div className="row" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {productosPorCategoria[prefijo].map((producto) => (
              <div
                className="item"
                key={producto.id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "220px",
                  textAlign: "center",
                }}
              >
                <img
                  src={producto.imagenUrl}
                  alt={producto.nombre}
                  style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }}
                />
                <h4 className="name">{producto.nombre}</h4>
                <p className="price">${producto.precio.toLocaleString()} CLP</p>
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
                  🛒 Agregar
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
