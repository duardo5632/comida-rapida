export const validateUserLogin = (user: { name: string; password: string }) => {
    if (!user.name.trim() || !user.password.trim()) {
        throw new Error("El nombre y la contraseña son requeridos");
    } 
};