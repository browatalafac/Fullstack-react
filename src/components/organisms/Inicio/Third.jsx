import React from "react";
import Product from "../Product"; // Ajusta la ruta según tu proyecto

export default function Third() {
  const products = [
    {
      code: "1",
      image: "https://tortasdelacasa.com/wp-content/uploads/2024/02/DSC4340-scaled.jpg",
      name: "Torta cuadrada de Chocolate",
      description: "Deliciosa torta casera",
      price: "45000"
    },
    {
      code: "2",
      image: "https://images.aws.nestle.recipes/original/2024_10_23T06_40_18_badun_images.badun.es_tarta_fria_de_chocolate_blanco_con_frutas.jpg",
      name: "Torta cuadrada de frutas",
      description: "Torta de frutas frescas",
      price: "50000"
    },
    {
      code: "3",
      image: "https://jetextramar.com/wp-content/uploads/2021/11/tarta-de-santiago1-empresa-de-alimentos.jpg",
      name: "Tarta de Santiago",
      description: "Tarta tradicional española",
      price: "6000"
    },
    {
      code: "4",
      image: "https://www.lomismoperosano.cl/wp-content/uploads/2022/01/receta-torta-panqueque-naranja.jpg",
      name: "Tarta de naranja",
      description: "Tarta cítrica y fresca",
      price: "48000"
    },
    {
      code: "5",
      image: "https://rhenania.cl/wp-content/uploads/2020/12/CIRUELA-MANJAR-BLANCO.jpg",
      name: "Tarta circular manjar",
      description: "Tarta clásica de manjar",
      price: "42000"
    }
  ];

  return (
    <section id="third">
      <h1>Nuestras tortitas más populares</h1>
      <div id="popular1">
        {products.map((p) => (
          <Product key={p.code} {...p} />
        ))}
      </div>
    </section>
  );
}
