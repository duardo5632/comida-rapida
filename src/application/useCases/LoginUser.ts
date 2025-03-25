import { sendLoginRequest } from "../../infrastructure/api/AuthAPI";
import { validateUserLogin } from "../validators/validateUserLogin";

export const loginUser = async (name: string, password: string) => {
    validateUserLogin({ name, password }); //Validamos antes de enviar
    return await sendLoginRequest({ name, password }); //Si pasa la validación, enviamos al API
};
