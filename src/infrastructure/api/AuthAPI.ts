//ver bien
export const sendLoginRequest = async (user: { name: string; password: string }) => {
    try {
        const response = await axios.post("https://tuapi.com/login", user);
        return response.data; // ✅ Retornamos la respuesta del API
    } catch (error) {
        throw new Error("Error al conectarse al servidor, Por favor intente mas tarde"); //Si hay un error, lanzamos una excepción
    }
};