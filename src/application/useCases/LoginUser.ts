import { sendLoginRequest } from "../../infrastructure/api/AuthAPI";
import { validateUserLogin } from "../validators/validateUserLogin";

export const loginUser = async (name: string, password: string) => {

    validateUserLogin({ name, password }); //Validamos antes de enviar
    const response = await sendLoginRequest({ name, password }); //Si pasa la validación, enviamos al API y retorna la respuesta

    //es necesario el === true?
    return response === true; //Retornamos la respuesta del API
};