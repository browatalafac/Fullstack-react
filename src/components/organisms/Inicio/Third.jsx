import React from 'react';

export default function Third() {
  return (
    <section id="third">
      <h1>Nuestras tortitas más populares</h1>
      <div id="popular1">
        <div className="pastel-item">
          <div className="pastel pastel1"></div>
          <p className="pastel-name">Torta cuadrada de Chocolate</p>
          <p className="pastel-price">$45.000</p>
          <button className="btn">Agregar al carrito</button>
        </div>

        <div className="pastel-item">
          <div className="pastel pastel2"></div>
          <p className="pastel-name">Torta cuadrada de frutas</p>
          <p className="pastel-price">$50.000</p>
          <button className="btn">Agregar al carrito</button>
        </div>

        <div className="pastel-item">
          <div className="pastel pastel3"></div>
          <p className="pastel-name">Tarta de Santiago</p>
          <p className="pastel-price">$6.000</p>
          <button className="btn">Agregar al carrito</button>
        </div>

        <div className="pastel-item">
          <div className="pastel pastel4"></div>
          <p className="pastel-name">Tarta de naranja</p>
          <p className="pastel-price">$48.000</p>
          <button className="btn">Agregar al carrito</button>
        </div>

        <div className="pastel-item">
          <div className="pastel pastel5"></div>
          <p className="pastel-name">Tarta circular manjar</p>
          <p className="pastel-price">$42.000</p>
          <button className="btn">Agregar al carrito</button>
        </div>
      </div>
    </section>
  );
}
