import React from 'react'
import { Link } from 'react-router-dom'

export default function First() {
  return (
    <section id="first">
        <div class="nav-left">
            
            <Link to ="/Home">Inicio</Link>
            <Link to ="/Catalog">Catálogo</Link>
            <Link to ="/Blogs">Blogs</Link>
            <Link to ="/About">Sobre nosotros</Link>
        </div>
        <form id="search-bar">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">🔍</button>
        </form>
        <div class="nav-right">
            <Link to="login.html">Inicio de sesión</Link>
            <Link to="car.html">🛒 Carrito</Link>
        </div>
    </section>
  )
}
