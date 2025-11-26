import axios from "axios";

const BASE_URL = 'http://100.28.128.138:8081/api/v1/productos';

class ProductoService {

  // Obtener lista completa
  getAllProductos() {
    return axios.get(BASE_URL);
  }

  // Obtener por ID
  getProductoById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  // Crear producto
  saveProducto(producto) {
    return axios.post(BASE_URL, producto);
  }

  // Actualizar producto
  updateProducto(id, producto) {
    return axios.put(`${BASE_URL}/${id}`, producto);
  }

  // Eliminar producto
  deleteProducto(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new ProductoService();
