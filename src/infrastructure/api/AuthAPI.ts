const API_URL = import.meta.env.VITE_API_URL; //URL de la API, se obtiene de las variables de entorno
import axios from 'axios';

//esto no puede esar aca
interface LoginResponse {
    exito: boolean; // ✅ Cambié el nombre de la propiedad a "exito" para que coincida con la respuesta del API 
}

//ver bien
export const sendLoginRequest = async (user: { name: string; password: string }) => {
    try {
        const response = await axios.post<LoginResponse>(`${API_URL}/login`, user);
        console.log(response.data); // ✅ Imprimimos la respuesta del API en la consola

        return response.data.exito === true; // ✅ Retornamos la respuesta del API
    } catch (error) {
        throw new Error("Error al conectarse al servidor, Por favor intente mas tarde"); //Si hay un error, lanzamos una excepción
    }
};