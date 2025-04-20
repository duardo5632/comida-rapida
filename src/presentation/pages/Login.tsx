import "../../styles/login.css"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../../application/useCases/LoginUser";
import { authAPI } from "../../infrastructure/api/AuthAPI";
import { useNavigate } from "react-router-dom";
//porque es default
export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            setErrorMessage("");
            //se envia todo los metodos de validacion a la funcion loginUser
            const response = await loginUser(name, password, authAPI);

            if(response){
                navigate("/menu"); //Redirige a la página de inicio si la respuesta
            }else{
                setErrorMessage("contraseña o nombre incorrecto"); //Si la respuesta no es exitosa, muestra un mensaje de error
            }
            
        }catch(error){
            setErrorMessage((error as Error).message);
        }
    };

    return(
        <>
            <div className="login">
                <div className="logo-container">
                    <img src="/image/logo.png" alt="Logo" className="logo" />
                </div>

                <h2>Iniciar Sesión</h2>
                
                <div className="container_name">
                    {/* nombre */}
                    <label htmlFor="nombre">Nombre</label>
                    <div className="password-wrapper">
                        <input 
                            id="nombre"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} /* Actualiza "name" cada vez que el usuario escribe */
                        />
                    </div>
                </div>
                
                {/* contraseña */}
                <div className="container_password">
                    <label htmlFor="password">Contraseña</label>
                    <div className="password-wrapper">
                        <input 
                            id="password"
                            type={showPassword ? "text": "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} /* Actualiza "name" cada vez que el usuario escribe */
                        />
                        <button type="button" 
                            className="toggle-password" 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>

                    </div>
                </div>

                <div>
                    <p className="error-message">{errorMessage}</p>
                </div>

                <div className="container-button">
                    <button 
                        type="button"        // ✅ Importante: evita que haga un submit y recargue la página
                        onClick={handleSubmit} // ✅ Aquí se ejecuta tu función
                        className="button"
                        >
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </>
    );
}
