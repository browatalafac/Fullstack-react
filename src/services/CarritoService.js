import axios from "axios";

// Es una buena práctica definir la URL base de tu API en un solo lugar.
// Asegúrate de que el puerto (8081) sea el correcto.
const BASE_URL = 'http://localhost:8081/api/v1/carrito';

class CarritoService {

    /**
     * Obtiene todos los ítems del carrito para un usuario específico.
     * Corresponde a: GET /api/v1/carrito/{usuarioId}
     * @param {number} usuarioId - El ID del usuario logueado.
     * @returns {Promise<AxiosResponse<any>>} La respuesta de Axios con los ítems del carrito.
     */
    getCarritoByUsuarioId(usuarioId) {
        return axios.get(`${BASE_URL}/${usuarioId}`);
    }

    /**
     * Agrega un nuevo ítem al carrito o actualiza la cantidad si ya existe.
     * Corresponde a: POST /api/v1/carrito
     * @param {object} item - El objeto del ítem del carrito. 
     *                          Ej: { usuario: { id: 1 }, producto: { id: 101 }, cantidad: 1 }
     * @returns {Promise<AxiosResponse<any>>} La respuesta de Axios con el ítem guardado.
     */
    agregarItemAlCarrito(item) {
        return axios.post(BASE_URL, item);
    }

    /**
     * Elimina un ítem del carrito por su ID.
     * Corresponde a: DELETE /api/v1/carrito/{itemId}
     * @param {number} itemId - El ID del registro en la tabla 'carrito_items'.
     * @returns {Promise<AxiosResponse<any>>} La respuesta de Axios.
     */
    eliminarItemDelCarrito(itemId) {
        return axios.delete(`${BASE_URL}/${itemId}`);
    }

    // Opcional: Si quieres una función para limpiar todo el carrito desde el cliente
    // Nota: La lógica de limpiar el carrito ya está en tu endpoint de "registrarCompra" en Spring,
    // por lo que este método podría no ser necesario si solo limpias el carrito tras una compra.
    /**
     * Limpia todo el carrito de un usuario.
     * Este es un método que podrías añadir a tu CarritoController si lo necesitas.
     * @param {number} usuarioId - El ID del usuario.
     * @returns {Promise<AxiosResponse<any>>}
     */
    
    limpiarCarrito(usuarioId) {
        return axios.delete(`${BASE_URL}/usuario/${usuarioId}`); 
       
    }
    
}

export default new CarritoService();
