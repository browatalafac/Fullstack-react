import React, { useState } from "react";
import UsuarioService from "../../../services/UsuarioService";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [clave1, setClave1] = useState("");
  const [clave2, setClave2] = useState("");
  const [errores, setErrores] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Validaciones
    if (nombre.length < 3) {
      setErrores("Ingrese mínimo 3 letras en el nombre.");
      return;
    }

    if (apellidos.trim() === "") {
      setErrores("Ingrese su apellido.");
      return;
    }

    if (!email.includes("@")) {
      setErrores("Añade un signo arroba (@) en el email.");
      return;
    }

    if (clave1 !== clave2 || clave2 === "") {
      setErrores("Las contraseñas no coinciden.");
      return;
    }

    if (direccion.trim() === "") {
      setErrores("Ingrese su dirección.");
      return;
    }

    setErrores("");

    // 🔹 Crear objeto igual al modelo del backend (nombre y apellido separados)
    const nuevoUsuario = {
      nombre: nombre,
      apellido: apellidos,
      correo: email,
      contrasena: clave1,
      direccion: direccion
    };

    // 🔹 Llamar al backend (Spring Boot)
    UsuarioService.saveUsuario(nuevoUsuario)
      .then((response) => {
        console.log("Usuario creado:", response.data);
        setMensaje("✅ Usuario registrado correctamente");

        // Limpiar el formulario
        setNombre("");
        setApellidos("");
        setDireccion("");
        setEmail("");
        setClave1("");
        setClave2("");
      })
      .catch((error) => {
        console.error("Error al registrar usuario:", error);
        setErrores("❌ No se pudo registrar el usuario. Verifica los datos.");
      });
  };

  return (
    <form id="formulario" onSubmit={handleSubmit}>
      <h1>Crear una cuenta</h1>

      <div className="row">
        <label htmlFor="nombres">Nombre</label>
        <input
          type="text"
          id="nombres"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Juan Andrés"
        />
      </div>

      <div className="row">
        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          placeholder="Pérez Muñoz"
        />
      </div>

      <div className="row">
        <label htmlFor="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="Los Molles #25"
        />
      </div>

      <div className="row">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="juanperez@gmail.com"
        />
      </div>

      <div className="row">
        <label htmlFor="clave1">Contraseña</label>
        <input
          type="password"
          id="clave1"
          value={clave1}
          onChange={(e) => setClave1(e.target.value)}
          placeholder="Clave1234"
        />
      </div>

      <div className="row">
        <label htmlFor="clave2">Repetir contraseña</label>
        <input
          type="password"
          id="clave2"
          value={clave2}
          onChange={(e) => setClave2(e.target.value)}
          placeholder="Clave1234"
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button
          type="reset"
          className="btn reset"
          onClick={() => setErrores("")}
        >
          Limpiar
        </button>
        <button type="submit" className="btn submit">
          Enviar
        </button>
      </div>

      {errores && (
        <p id="errores" style={{ color: "red" }}>
          {errores}
        </p>
      )}
      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
    </form>
  );
}
