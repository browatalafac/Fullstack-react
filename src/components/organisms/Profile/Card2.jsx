import React from 'react'

export default function Card2() {
  return (
    <div className="changeInfo">
        <div className="row">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="cambiar nombre"/>
      </div>
        <div className="row">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" placeholder="cambiar apellido"/>
      </div>
        <div className="row">
        <label htmlFor="email">Correo</label>
        <input type="text" id="correo" placeholder="cambiar correo"/>
       </div>
      <div className="row">
        <label htmlFor="adress">Dirección</label>
        <input type="text" id="direccion" placeholder="cambiar dirección"/>
      </div>
      <div className="row">
        <label htmlFor="contrase{a">Contraseña</label>
        <input type="text" id="contraseña" placeholder="cambiar contraseña"/>
      </div>
    </div>
  )
}
