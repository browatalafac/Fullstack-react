import React, { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [clave1, setClave1] = useState("");
  const [clave2, setClave2] = useState("");
  const [errores, setErrores] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3) {
      setErrores("Ingrese mínimo 3 letras en el nombre.");
      return;
    }

    if (!email.includes("@")) {
      setErrores("Añade un signo arroba (@) en el email.");
      return;
    }

    if (clave1 !== clave2 || clave2 === "") {
      setErrores("Las claves no coinciden.");
      return;
    }

    // Si todo está correcto
    setErrores("");
    alert("Formulario enviado correctamente ✅");
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
          className={nombre.length > 0 && nombre.length < 3 ? "error" : ""}
          placeholder="Juan Andres"
        />
      </div>

      <div className="row">
        <label htmlFor="apellidos">Apellidos</label>
        <input type="text" id="apellidos" placeholder="Perez Muñoz" />
      </div>

      <div className="row">
        <label htmlFor="direccion">Dirección</label>
        <input type="text" id="direccion" placeholder="Los molles #25" />
      </div>

      <div className="row">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={email.length > 0 && !email.includes("@") ? "error" : ""}
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
          className={clave2.length > 0 && clave1 !== clave2 ? "error" : ""}
          placeholder="Clave1234"
        />
      </div>

      <button type="reset" className="btn reset" onClick={() => setErrores("")}>
        Limpiar
      </button>
      <button type="submit" className="btn submit">
        Enviar
      </button>

      {errores && <p id="errores" style={{ color: "red" }}>{errores}</p>}
    </form>
  );
}
