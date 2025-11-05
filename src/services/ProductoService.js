import axios from "axios";
const BASE_URL = 'http://localhost:8080/api/v1/productos';

class ProductoService{
    getAllProductos(){
        return axios.get(BASE_URL);
    }

    getProductoById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }

    saveProducto(producto){
        return axios.post(`${BASE_URL}/${id}`, producto);
    }

    updateProducto(id,producto){
        return axios.put(`${BASE_URL}/${id}`);
    }

     deleteProducto(id){
        return axios.delete(`${BASE_URL}/${id}`);
    }


}
export default new (ProductoService);
