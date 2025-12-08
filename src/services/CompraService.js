import api from "./api";
const COMPRA_ENDPOINT = '/compras';

class CompraService{
    getAllCompras(){
        return api.get(COMPRA_ENDPOINT);
    }

    getCompraById(id){
        return api.get(`${COMPRA_ENDPOINT}/${id}`);
    }

    saveCompra(compra) {
        return api.post(COMPRA_ENDPOINT, compra);
  }

    updateCompra(id,compra){
        return api.put(`${COMPRA_ENDPOINT}/${id}`, compra);
    }

     deleteCompra(id){
        return api.delete(`${COMPRA_ENDPOINT}/${id}`);
    }


}
export default new CompraService();
