import api from "./api"; 


const PRODUCTOS_ENDPOINT = '/productos'; 

class ProductoService {


  getAllProductos() {
    
    return api.get(PRODUCTOS_ENDPOINT); 
  }


  getProductoById(id) {
    return api.get(`${PRODUCTOS_ENDPOINT}/${id}`);
  }


  saveProducto(producto) {
    return api.post(PRODUCTOS_ENDPOINT, producto);
  }


  updateProducto(id, producto) {
    return api.put(`${PRODUCTOS_ENDPOINT}/${id}`, producto);
  }


  deleteProducto(id) {
    return api.delete(`${PRODUCTOS_ENDPOINT}/${id}`);
  }
}

export default new ProductoService();