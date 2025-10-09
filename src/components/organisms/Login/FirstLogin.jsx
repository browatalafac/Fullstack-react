import React from "react";
import { Link } from "react-router-dom";

export default function FirstLogin() {
  return (
    <section id="first_login">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre nosotros</Link>
        <a href="#">Nuestras redes sociales</a>
      </nav>
    </section>
  );
}
