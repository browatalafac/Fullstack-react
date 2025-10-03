import React from 'react'

export default function First() {
  return (
    <section id="first">
        <div className="nav-left">
            <a href="index.html">Inicio</a>
            <a href="blogs.html">Blogs</a>
            <a href="about.html">Sobre nosotros</a>
        </div>
        <form id="search-bar">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">🔍</button>
        </form>
        <div className="nav-right">
            <a href="login.html">Inicio de sesión</a>
            <a href="car.html" id="cart">🛒 Carrito</a>
        </div>
    </section>
  )
}
