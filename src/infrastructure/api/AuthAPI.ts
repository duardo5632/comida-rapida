const API_URL = import.meta.env.VITE_API_URL; //URL de la API, se obtiene de las variables de entorno
import axios from 'axios';
import { UserRepository } from "../../domain/repositories/UserRepository";

//hay otra forma de hacerlo?
interface LoginAPIResponse {
    exito: boolean; // ✅ Cambié el nombre de la propiedad a "exito" para que coincida con la respuesta del API 
}

export const authAPI: UserRepository = {
    async login(name: string, password: string): Promise<boolean> {
      try {
        const response = await axios.post<LoginAPIResponse>(`${API_URL}/login`, {name,password});
  
        return response.data.exito === true;
      } catch (error) {
        throw new Error("Error al conectarse al servidor, Por favor intente más tarde");
      }
    }
};
  