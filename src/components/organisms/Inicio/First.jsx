import React from 'react';
import { Link } from 'react-router-dom';

export default function First() {
  return (
    <section id="first">
      <div className="nav-left">
        <Link to="/Home">Inicio</Link>
        <Link to="/Catalog">Catálogo</Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to="/About">Sobre nosotros</Link>
      </div>
      <form id="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">🔍</button>
      </form>
      <div className="nav-right">
        <Link to="/Login">Inicio de sesión</Link>
        <Link to="/Car">🛒 Carrito</Link>
      </div>
    </section>
  );
}
