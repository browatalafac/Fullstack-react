import React from 'react';

export default function Card1() {
  return (
    <div className="card1">
      <img className="photo" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Foto de perfil" />
      <div className="info">
        <div><span className="label">Nombre Completo :</span> Tomas Ponce</div>
        <div><span className="label">Teléfono :</span> +56 9 4432 8342</div>
        <div><span className="label">Correo Electrónico :</span> pepe.pe@duocuc.cl</div>
        <div><span className="label">Direccion :</span>Av. Concha y Toro 3127</div>
      </div>
    </div>
  );
}
