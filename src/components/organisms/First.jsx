import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./First.css";

export default function First() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // 🔹 Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("products"); // opcional: limpiar carrito al salir
    alert("👋 Sesión cerrada correctamente");
    navigate("/loginTrue"); // redirige al login o a donde prefieras
  };

  return (
    <section id="first">
      <div className="nav-left">
        <Link to="/">Inicio</Link>
        <Link to="/Catalog">Catálogo</Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to="/About">Sobre nosotros</Link>
      </div>

      <form id="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">🔍</button>
      </form>

      <div className="nav-right">
        <Link to="/profile">Perfil</Link>

        {/* 🔒 Mostrar botones según sesión */}
        {!usuario ? (
          <>
            <Link to="/loginTrue">Iniciar sesión</Link>
            <Link to="/login">Crear cuenta</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "10px", fontWeight: "bold" }}>
              👤 {usuario.nombre}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "#e74c3c",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Cerrar sesión
            </button>
          </>
        )}

        <Link to="/cart">🛒 Carrito</Link>
      </div>
    </section>
  );
}
