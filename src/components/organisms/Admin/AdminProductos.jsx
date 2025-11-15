import React, { useEffect, useState } from "react";
import ProductoService from "../../../services/ProductoService.js"; 

export default function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ nombre: "", precio: "", imagenUrl: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    ProductoService.getAllProductos()
      .then((res) => setProductos(res.data))
      .catch((err) => console.error(err));
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const guardarProducto = () => {
    if (!form.nombre || !form.precio || !form.imagenUrl) {
      alert("Faltan campos por completar");
      return;
    }

    if (editingId) {
      ProductoService.updateProducto(editingId, form).then(() => {
        cargarProductos();
        setForm({ nombre: "", precio: "", imagenUrl: "" });
        setEditingId(null);
      });
    } else {
      ProductoService.saveProducto(form).then(() => {
        cargarProductos();
        setForm({ nombre: "", precio: "", imagenUrl: "" });
      });
    }
  };

  const eliminarProducto = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
      ProductoService.deleteProducto(id).then(() => cargarProductos());
    }
  };

  const editarProducto = (p) => {
    setForm({
      nombre: p.nombre,
      precio: p.precio,
      imagenUrl: p.imagenUrl,
    });
    setEditingId(p.id);
  };

  return (
    <section className="admin-productos-section">
      <h2>Administrar Productos</h2>

      <div className="product-form">
        <input
          id="nombre"
          value={form.nombre}
          onChange={onChange}
          placeholder="Nombre del producto"
        />
        <input
          id="precio"
          value={form.precio}
          onChange={onChange}
          placeholder="Precio"
          type="number"
        />
        <input
          id="imagenUrl"
          value={form.imagenUrl}
          onChange={onChange}
          placeholder="URL de la imagen"
        />

        <button onClick={guardarProducto}>
          {editingId ? "Guardar Cambios" : "Crear Producto"}
        </button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>
                <img src={p.imagenUrl} alt={p.nombre} />
              </td>
              <td>
                <button onClick={() => editarProducto(p)}>Editar</button>
                <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
