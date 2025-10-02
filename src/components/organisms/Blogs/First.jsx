import React from 'react'

export default function First() {
  return (
    <section id="first">
        <div class="nav-left">
            <a href="index.html">Inicio</a>
            <a href="catalog.html">Catalogo</a>
            <a href="about.html">Sobre nosotros</a>
        </div>
        <div id="search-bar">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">🔍</button>
        </div>
        <div class="nav-right">
            <a href="login.html">Inicio de sesión</a>
            <a href=""></a>
            <a href="car.html" id="cart">🛒 Carrito</a>
            </div>
    </section>
  )
}
