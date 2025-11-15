import React from "react";
import AdminProductos from "./AdminProductos.jsx";

export default function Second() {
  return (
    <div className="admin-root">

      {/* Barra de navegación */}
      <div id="first">
        <div className="nav-left">
          <img
            src="/logo.png"
            alt="Logo"
            className="logo"
          />
          <h2>Panel de Administración</h2>
        </div>

        <div className="nav-right">
          <a href="/">Volver a la página principal</a>
          <a href="/">Cerrar sesión</a>
        </div>
      </div>

      {/* Header bonito */}
      <header>
        <h1>Bienvenido Administrador 🎂</h1>
        <p>Gestiona tus productos, usuarios y pedidos</p>
      </header>

      {/* Contenido principal */}
      <main>
        <AdminProductos />
      </main>

      {/* Footer */}
      <footer id="pie">
        <div className="footer-content">
          {/* Puedes agregar más cosas aquí si quieres */}
        </div>

        <div className="footer-bottom">
          © 2025 Pastelería Mil Sabores — Panel Administrativo
        </div>
      </footer>

    </div>
  );
}
