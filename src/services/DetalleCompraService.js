import api from "./api";
const DETALLE_COMPRA_ENDPOINT = '/detalle-compra';

class DetalleCompraService{
    getAllDetalleCompra(){
        return api.get(DETALLE_COMPRA_ENDPOINT);
    }

    getDetalleCompraById(id){
        return api.get(`${DETALLE_COMPRA_ENDPOINT}/${id}`);
    }

}
export default new DetalleCompraService();
