import React from "react";

export default function Card2() {
  return (
    <div className="changeInfo">
      <h2 className="changeInfo-title">Editar información del perfil</h2>
      <div className="row">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Cambia tu nombre" />
      </div>
      <div className="row">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" placeholder="Cambia tu apellido" />
      </div>
      <div className="row">
        <label htmlFor="correo">Correo</label>
        <input type="text" id="correo" placeholder="Cambia tu correo" />
      </div>
      <div className="row">
        <label htmlFor="direccion">Dirección</label>
        <input type="text" id="direccion" placeholder="Cambia tu dirección" />
      </div>
      <div className="row">
        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" id="contraseña" placeholder="Cambia tu contraseña" />
      </div>
      <button className="save-btn">Guardar</button>
    </div>
  );
}
