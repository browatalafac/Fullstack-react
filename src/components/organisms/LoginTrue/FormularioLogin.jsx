import React, { useState } from "react";
import UsuarioService from "../../../services/UsuarioService";

export default function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [errores, setErrores] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!email.includes("@")) {
      setErrores("El correo debe contener un signo arroba (@).");
      return;
    }

    if (clave.trim() === "") {
      setErrores("Ingrese su contraseña.");
      return;
    }

    setErrores("");

    // Crear el objeto igual que en el backend
    const usuarioLogin = {
      correo: email,
      contrasena: clave
    };

    // Llamar al backend (Spring Boot)
     UsuarioService.login(usuarioLogin)
      .then((response) => {
        const token = response.data.token;
        const usuario = response.data.usuario;

        console.log("Datos recibidos:", response.data);

        // Guardar token y usuario
        localStorage.setItem("token", token);
        localStorage.setItem("usuario", JSON.stringify(usuario));
        localStorage.setItem("role", usuario.rol); // Guardar el rol del usuario

        setMensaje("Inicio de sesión exitoso");

        //Redirigir según el rol
        if (usuario.rol === "ADMIN") {
          window.location.href = "/panel-admin";
        } else {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error);
        setErrores("Correo o contraseña incorrectos");
      });
  };

  const handleReset = () => {
    setEmail("");
    setClave("");
    setErrores("");
    setMensaje("");
  };

  return (
    <form id="formulario-login" onSubmit={handleSubmit}>
      <h1>Iniciar sesión</h1>

      <div className="row">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tuemail@gmail.com"
        />
      </div>

      <div className="row">
        <label htmlFor="clave">Contraseña</label>
        <input
          type="password"
          id="clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          placeholder="Tu contraseña"
        />
      </div>

      <div className="actions">
        <button type="button" className="btn reset" onClick={handleReset}>
          Limpiar campos
        </button>
        <button type="submit" className="btn submit">
          Iniciar sesión
        </button>
      </div>

      {errores && <p id="errores" style={{ color: "red" }}>{errores}</p>}
      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
    </form>
  );
}
