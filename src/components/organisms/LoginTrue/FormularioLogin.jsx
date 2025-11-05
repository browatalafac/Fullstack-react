import React, { useState } from "react";
import UsuarioService from "../../../services/UsuarioService";

export default function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [errores, setErrores] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Validaciones básicas
    if (!email.includes("@")) {
      setErrores("El correo debe contener un signo arroba (@).");
      return;
    }

    if (clave.trim() === "") {
      setErrores("Ingrese su contraseña.");
      return;
    }

    setErrores("");

    // 🔹 Crear el objeto igual que en el backend
    const usuarioLogin = {
      correo: email,
      contrasena: clave
    };

    // 🔹 Llamar al backend (Spring Boot)
    UsuarioService.login(usuarioLogin)
      .then((response) => {
        console.log("Usuario autenticado:", response.data);
        setMensaje("✅ Inicio de sesión exitoso");
        // Guardar usuario en localStorage
        localStorage.setItem("usuario", JSON.stringify(response.data));

        // Opcional: redirigir a otra página
        // window.location.href = "/catalogo";
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error);
        setErrores("❌ Correo o contraseña incorrectos");
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

      <div style={{ marginTop: "1rem" }}>
        <button type="button" className="btn reset" onClick={handleReset}>
          Limpiar
        </button>
        <button type="submit" className="btn submit">
          Ingresar
        </button>
      </div>

      {errores && <p id="errores" style={{ color: "red" }}>{errores}</p>}
      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
    </form>
  );
}
