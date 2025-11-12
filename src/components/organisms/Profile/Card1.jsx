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
        // Si falla la carga desde backend, usar lo que haya en localStorage como fallback
        setPerfil(usuarioLocal);
      })
      .finally(() => setLoading(false));
  }, []);

  const nombreCompleto = perfil
    ? perfil.nombreCompleto || `${perfil.nombres || perfil.nombre || ''} ${perfil.apellidos || perfil.apellido || ''}`.trim()
    : '';
  const correo = perfil?.correo || perfil?.email || '';
  const direccion = perfil?.direccion || perfil?.dirección || '';
  const foto =
    perfil?.fotoUrl || perfil?.foto || perfil?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg';

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
      <img className="photo" src={foto} alt="Foto de perfil" />
      <div className="info">
        <div><span className="label">Nombre Completo :</span> {nombreCompleto || '—'}</div>
        <div><span className="label">Correo Electrónico :</span> {correo || '—'}</div>
        <div><span className="label">Direccion :</span> {direccion || '—'}</div>
      </div>
    </div>
  );
}
