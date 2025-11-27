import axios from "axios";
const BASE_URL = 'http://localhost:8081/api/v1/productos';

class DetalleCompraService{
    getAllDetalleCompra(){
        return axios.get(BASE_URL);
    }

    getDetalleCompraById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }

}
export default new DetalleCompraService();
