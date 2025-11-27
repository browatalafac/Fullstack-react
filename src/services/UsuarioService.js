import api from "./api";

const BASE_URL = 'http://localhost:8081/api/v1/usuarios';

class UsuarioService {
    
    getAllUsuarios() {
        return api.get(BASE_URL);
    }
    
    getUsuarioById(id) {
        return api.get(`${BASE_URL}/${id}`);
    }

    saveUsuario(usuario) {
        return api.post(BASE_URL, usuario);
    }
   
    updateUsuario(id, usuario) {
        return api.put(`${BASE_URL}/${id}`, usuario);
    }
   
    deleteUsuario(id) {
        return api.delete(`${BASE_URL}/${id}`);
    }
    
    login(usuario) {
        return api.post(`${BASE_URL}/login`, usuario);
    }
}

export default new UsuarioService();
