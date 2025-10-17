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

  const images = {
    TC001: "https://tortasdelacasa.com/wp-content/uploads/2024/02/DSC4340-scaled.jpg",
    TC002: "https://images.aws.nestle.recipes/original/2024_10_23T06_40_18_badun_images.badun.es_tarta_fria_de_chocolate_blanco_con_frutas.jpg",
    TT001: "https://reposteriaflores.cl/wp-content/uploads/2016/11/maxresdefault.jpg",
    TT002: "https://rhenania.cl/wp-content/uploads/2020/12/CIRUELA-MANJAR-BLANCO.jpg",
    PI001: "https://www.elinasaiach.com/wp-content/uploads/2022/04/Mousse-Chocolate-3.jpg",
    PI002: "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/08/tiramisu-postre-italiano.jpg",
    PSA001: "https://www.lomismoperosano.cl/wp-content/uploads/2022/01/receta-torta-panqueque-naranja.jpg",
    PSA002: "https://www.hola.com/horizon/landscape/64c21cd97107-tarta-horno-queso-t.jpg",
    PT001: "https://cdn7.kiwilimon.com/recetaimagen/1366/960x640/2229.jpg.jpg",
    PT002: "https://jetextramar.com/wp-content/uploads/2021/11/tarta-de-santiago1-empresa-de-alimentos.jpg",
    PG001: "https://azucarledesma.com/wp-content/uploads/2024/01/20240131-BrownieLight.jpg",
    PG002: "https://dinkel.es/wp-content/uploads/2020/06/1041-Pan-sin-Gluten-2.png",
    PV001: "https://luciapaula.com/wp-content/uploads/2023/01/Blog-1970-01-20-125839033.jpg",
    PV002: "https://i.blogs.es/8792e6/galletas-avea-tahina-datiles/840_560.jpg",
    TE001: "https://i.pinimg.com/originals/aa/a0/4f/aaa04fb61005c9fc6d748dee6eac76f3.jpg",
    TE002: "https://i.pinimg.com/474x/3b/bc/bb/3bbcbb826b865e5278f53a5b2661c2e5.jpg"
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
              price: "45000",
              "image": images.TC001
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-TC002"></div>
            <h3 className="name">Torta Cuadrada de Frutas</h3>
            <p className="price">$50.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "2",
              name: "Torta Cuadrada de Frutas",
              price: "50000",
              "image": images.TC002
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
              price: "40000",
              "image": images.TT001
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-TT002"></div>
            <h3 className="name">Torta Circular de Manjar</h3>
            <p className="price">$42.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "5",
              name: "Torta Circular de Manjar",
              price: "42000",
              "image": images.TT002
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
              price: "5000",
              "image": images.PI001
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PI002"></div>
            <h3 className="name">Tiramisú Clásico</h3>
            <p className="price">$5.500 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "7",
              name: "Tiramisú Clásico",
              price: "5500",
              "image": images.PI002
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
              price: "48000",
              "image": images.PSA001
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PSA002"></div>
            <h3 className="name">Cheesecake Sin Azúcar</h3>
            <p className="price">$47.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "9",
              name: "Cheesecake Sin Azúcar",
              price: "47000",
              "image": images.PSA002
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
              price: "3000",
              "image": images.PT001
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PT002"></div>
            <h3 className="name">Tarta de Santiago</h3>
            <p className="price">$6.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "3",
              name: "Tarta de Santiago",
              price: "6000",
              "image": images.PT002
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
              price: "4000",
              "image": images.PG001
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PG002"></div>
            <h3 className="name">Pan Sin Gluten</h3>
            <p className="price">$3.500 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "13",
              name: "Pan Sin Gluten",
              price: "3500",
              "image": images.PG002
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
              price: "50000",
              "image": images.PV001
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-PV002"></div>
            <h3 className="name">Galletas Veganas de Avena</h3>
            <p className="price">$4.500 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "15",
              name: "Galletas Veganas de Avena",
              price: "4500",
              "image": images.PV002
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
              price: "55000",
              "image": images.TE001
            })}>Agregar al carrito</button>
          </div>
          <div className="item">
            <div className="img img-TE002"></div>
            <h3 className="name">Torta Especial de Boda</h3>
            <p className="price">$60.000 CLP</p>
            <button className="btn" onClick={() => addToCart({
              code: "17",
              name: "Torta Especial de Boda",
              price: "60000",
              "image": images.TE002
            })}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}
