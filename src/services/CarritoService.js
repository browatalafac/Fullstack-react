import axios from "axios";

const BASE_URL = 'http://localhost:8081/api/v1/carrito';

// Función para obtener el token rápidamente
const authHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
};

class CarritoService {

  // 🟢 GET /carrito/{usuarioId}
  getCarritoByUsuarioId(usuarioId) {
    return axios.get(`${BASE_URL}/${usuarioId}`, authHeader());
  }

  // 🟢 POST /carrito
  agregarItemAlCarrito(item) {
    return axios.post(BASE_URL, item, authHeader());
  }

  // 🟢 DELETE /carrito/{itemId}
  eliminarItemDelCarrito(itemId) {
    return axios.delete(`${BASE_URL}/${itemId}`, authHeader());
  }

  // 🟢 DELETE /carrito/usuario/{usuarioId}
  limpiarCarrito(usuarioId) {
    return axios.delete(`${BASE_URL}/usuario/${usuarioId}`, authHeader());
  }

}

export default new CarritoService();
