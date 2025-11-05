import axios from "axios";
const BASE_URL = 'http://localhost:8080/api/v1/compras';

class CompraService{
    getAllCompras(){
        return axios.get(BASE_URL);
    }

    getCompraById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }

    saveCompra(compra){
        return axios.post(`${BASE_URL}/${id}`, compra);
    }

    updateCompra(id,compra){
        return axios.put(`${BASE_URL}/${id}`);
    }

     deleteCompra(id){
        return axios.delete(`${BASE_URL}/${id}`);
    }


}
export default new CompraService();
