import api from "./api";

const USUARIOS_ENDPOINT = '/usuarios';

class UsuarioService {
    
    getAllUsuarios() {
        return api.get(USUARIOS_ENDPOINT);
    }
    
    getUsuarioById(id) {
        return api.get(`${USUARIOS_ENDPOINT}/${id}`);
    }

    saveUsuario(usuario) {
        return api.post(USUARIOS_ENDPOINT, usuario);
    }
   
    updateUsuario(id, usuario) {
        return api.put(`${USUARIOS_ENDPOINT}/${id}`, usuario);
    }
   
    deleteUsuario(id) {
        return api.delete(`${USUARIOS_ENDPOINT}/${id}`);
    }
    
    login(usuario) {
        return api.post(`${USUARIOS_ENDPOINT}/login`, usuario);
    }
}

export default new UsuarioService();
