const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/user";

interface LoginAPIResponse {
  exito: boolean;
}

export const authAPI: UserRepository = {
  async login(name, password) {
    try {
      const response = await axios.post<LoginAPIResponse>(`${API_URL}/login`, {
        name,
        password,
      });

      if (response.data.exito) {
        return new User(name);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Error al conectarse al servidor, intente más tarde");
    }
  },
};
