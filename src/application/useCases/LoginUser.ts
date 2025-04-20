import { validateUserLogin } from "../validators/validateUserLogin";
import { UserRepository } from "../../domain/repositories/UserRepository";

export const loginUser = async (name: string, password: string, userRepo: UserRepository): Promise<boolean> => {
    validateUserLogin({ name, password }); //Validamos antes de enviar
    return await userRepo.login(name, password); //Si pasa la validación, enviamos al API y retorna la respuesta
};