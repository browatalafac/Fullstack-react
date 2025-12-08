import api from "./api";
const CARRITO_ENDPOINT = '/carrito';

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


  getCarritoByUsuarioId(usuarioId) {
    return api.get(`${CARRITO_ENDPOINT}/${usuarioId}`, authHeader());
  }


  agregarItemAlCarrito(item) {
    return api.post(CARRITO_ENDPOINT, item, authHeader());
  }


  eliminarItemDelCarrito(itemId) {
    return api.delete(`${CARRITO_ENDPOINT}/${itemId}`, authHeader());
  }


  limpiarCarrito(usuarioId) {
    return api.delete(`${CARRITO_ENDPOINT}/usuario/${usuarioId}`, authHeader());
  }

}

export default new CarritoService();
