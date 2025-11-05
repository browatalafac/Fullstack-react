import axios from "axios";

const BASE_URL = 'http://localhost:8081/api/v1/usuarios';

class UsuarioService {
    
    getAllUsuarios() {
        return axios.get(BASE_URL);
    }
    
    getUsuarioById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    saveUsuario(usuario) {
        return axios.post(BASE_URL, usuario);
    }
   
    updateUsuario(id, usuario) {
        return axios.put(`${BASE_URL}/${id}`, usuario);
    }
   
    deleteUsuario(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
    
    login(usuario) {
        return axios.post(`${BASE_URL}/login`, usuario);
    }
}

export default new UsuarioService();
