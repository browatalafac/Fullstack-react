import React from "react";
import { useEffect, useState } from "react";
import UsuarioService from "../../../services/UsuarioService";

export default function Card2() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    direccion: "",
    contrasena: ""
  });
  const [initialForm, setInitialForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    direccion: "",
  });
  const [userId, setUserId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    if (!usuarioLocal || !usuarioLocal.id) {
      setError("Debes iniciar sesión para editar tu perfil.");
      return;
    }
    setUserId(usuarioLocal.id);
    UsuarioService.getUsuarioById(usuarioLocal.id)
      .then((res) => {
        const u = res.data || usuarioLocal;
        const next = {
          nombre: u.nombres || u.nombre || "",
          apellido: u.apellidos || u.apellido || "",
          correo: u.correo || u.email || "",
          direccion: u.direccion || u.dirección || "",
        };
        setForm({ ...next, contrasena: "" });
        setInitialForm(next);
      })
      .catch(() => {
        const u = usuarioLocal;
        const next = {
          nombre: u.nombres || u.nombre || "",
          apellido: u.apellidos || u.apellido || "",
          correo: u.correo || u.email || "",
          direccion: u.direccion || u.dirección || "",
        };
        setForm({ ...next, contrasena: "" });
        setInitialForm(next);
      });
  }, []);

  const onChange = (e) => {
    const { id, value } = e.target;
    if (id === "nombre") setForm((f) => ({ ...f, nombre: value }));
    if (id === "apellido") setForm((f) => ({ ...f, apellido: value }));
    if (id === "correo") setForm((f) => ({ ...f, correo: value }));
    if (id === "direccion") setForm((f) => ({ ...f, direccion: value }));
    if (id === "contraseña") setForm((f) => ({ ...f, contrasena: value }));
  };

  const onSave = async () => {
    if (!userId) return;
    setSaving(true);
    setFeedback("");
    setError("");

    // Obtener el usuario previo (con las mismas llaves que maneja el backend)
    const prev = JSON.parse(localStorage.getItem("usuario")) || {};
    // Empezar el payload desde la forma que el backend ya nos devolvió
    const payload = { ...prev };
    // Asegurar id de ruta
    payload.id = userId;

    // Detectar y aplicar cambios usando las llaves que existen en el objeto previo
    const nombreKey = Object.prototype.hasOwnProperty.call(prev, "nombres") ? "nombres" : (Object.prototype.hasOwnProperty.call(prev, "nombre") ? "nombre" : "nombres");
    const apellidoKey = Object.prototype.hasOwnProperty.call(prev, "apellidos") ? "apellidos" : (Object.prototype.hasOwnProperty.call(prev, "apellido") ? "apellido" : "apellidos");
    const correoKey = Object.prototype.hasOwnProperty.call(prev, "correo") ? "correo" : (Object.prototype.hasOwnProperty.call(prev, "email") ? "email" : "correo");
    const direccionKey = Object.prototype.hasOwnProperty.call(prev, "direccion") ? "direccion" : (Object.prototype.hasOwnProperty.call(prev, "dirección") ? "dirección" : "direccion");

    // Solo aplicar campos modificados
    if (form.nombre !== initialForm.nombre && form.nombre.trim() !== "") payload[nombreKey] = form.nombre;
    if (form.apellido !== initialForm.apellido && form.apellido.trim() !== "") payload[apellidoKey] = form.apellido;
    if (form.correo !== initialForm.correo && form.correo.trim() !== "") payload[correoKey] = form.correo;
    if (form.direccion !== initialForm.direccion && form.direccion.trim() !== "") payload[direccionKey] = form.direccion;
    if (form.contrasena && form.contrasena.trim() !== "") payload.contrasena = form.contrasena;

    // Eliminar propiedades que no deberían viajar (si existieran)
    delete payload.token;
    delete payload.roles;
    delete payload.authorities;

    // Validaciones de ayuda al usuario
    const noChanges =
      (form.nombre === initialForm.nombre || form.nombre.trim() === "") &&
      (form.apellido === initialForm.apellido || form.apellido.trim() === "") &&
      (form.correo === initialForm.correo || form.correo.trim() === "") &&
      (form.direccion === initialForm.direccion || form.direccion.trim() === "") &&
      (!form.contrasena || form.contrasena.trim() === "");
    if (noChanges) {
      setError("No hay cambios para guardar.");
      setSaving(false);
      return;
    }

    try {
      const res = await UsuarioService.updateUsuario(userId, payload);
      const updated = res.data || payload;
      const prev = JSON.parse(localStorage.getItem("usuario")) || {};
      const merged = { ...prev, ...updated };
      localStorage.setItem("usuario", JSON.stringify(merged));
      setFeedback("Datos actualizados correctamente");
      setForm((f) => ({ ...f, contrasena: "" }));
      // Actualizar initialForm con los nuevos valores para permitir ediciones subsecuentes campo a campo
      setInitialForm({
        nombre: payload.nombres,
        apellido: payload.apellidos,
        correo: payload.correo,
        direccion: payload.direccion,
      });
    } catch (e) {
      const status = e?.response?.status;
      const backendMsg = e?.response?.data?.message || e?.response?.data?.error || e?.response?.data;
      const msg = backendMsg || e?.message || "No se pudo actualizar";
      console.error("UPDATE ERROR", { status, data: e?.response?.data, payload });
      setError(`Error${status ? ` (${status})` : ''}: ${msg}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="changeInfo">
      <h2 className="changeInfo-title">Editar información del perfil</h2>
      <div className="row">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Cambia tu nombre" value={form.nombre} onChange={onChange} />
      </div>
      <div className="row">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" id="apellido" placeholder="Cambia tu apellido" value={form.apellido} onChange={onChange} />
      </div>
      <div className="row">
        <label htmlFor="correo">Correo</label>
        <input type="text" id="correo" placeholder="Cambia tu correo" value={form.correo} onChange={onChange} />
      </div>
      <div className="row">
        <label htmlFor="direccion">Dirección</label>
        <input type="text" id="direccion" placeholder="Cambia tu dirección" value={form.direccion} onChange={onChange} />
      </div>
      <div className="row">
        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" id="contraseña" placeholder="Cambia tu contraseña" value={form.contrasena} onChange={onChange} />
      </div>
      <button className="save-btn" onClick={onSave} disabled={saving || !userId}>Guardar</button>
      {feedback && <p className="save-feedback">{feedback}</p>}
      {error && <p className="save-feedback error">{error}</p>}
    </div>
  );
}
