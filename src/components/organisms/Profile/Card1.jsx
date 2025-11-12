import React from 'react';

import { useEffect, useState } from 'react';
import UsuarioService from '../../../services/UsuarioService';

export default function Card1() {
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const usuarioLocal = JSON.parse(localStorage.getItem('usuario'));
    if (!usuarioLocal || !usuarioLocal.id) {
      setError('Debes iniciar sesión para ver tu perfil.');
      setLoading(false);
      return;
    }

    UsuarioService.getUsuarioById(usuarioLocal.id)
      .then((res) => {
        setPerfil(res.data);
      })
      .catch(() => {
        // si falla la carga desde el back, usa lo que haya en el localstorage como fallback
        setPerfil(usuarioLocal);
      })
      .finally(() => setLoading(false));
  }, []);

  const nombreCompleto = perfil
    ? perfil.nombreCompleto || `${perfil.nombres || perfil.nombre || ''} ${perfil.apellidos || perfil.apellido || ''}`.trim(): '';
  const correo = perfil?.correo || perfil?.email || '';
  const direccion = perfil?.direccion || perfil?.dirección || '';
  const inicial = ((nombreCompleto || correo || '').trim().charAt(0) || '?').toUpperCase();
  const nombre = (perfil?.nombres || perfil?.nombre || '').trim();
  const apellido = (perfil?.apellidos || perfil?.apellido || '').trim();

  if (loading) {
    return (
      <div className="card1">
        <div className="info">Cargando perfil...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card1">
        <div className="info">{error}</div>
      </div>
    );
  }

  return (
    <div className="card1">
      <div className="card1-header">
        <div className="photo">{inicial}</div>
        <div className="fullname">{nombreCompleto || '—'}</div>
      </div>
      <div className="card1-body">
        <h3 className="section-title">Perfil</h3>
        <hr className="section-divider" />
        <div className="field"><span className="label">Nombre:</span> {nombre || '—'}</div>
        <div className="field"><span className="label">Apellido:</span> {apellido || '—'}</div>
        <div className="field"><span className="label">Correo:</span> {correo || '—'}</div>
        <div className="field"><span className="label">Dirección:</span> {direccion || '—'}</div>
      </div>
    </div>
  );
}
