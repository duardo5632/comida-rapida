import "../../styles/login.css";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../../application/useCases/LoginUser";
import { authAPI } from "../../infrastructure/api/AuthAPI";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    try {
      setErrorMessage("");
      setIsLoading(true);
      const response = await loginUser(name, password, authAPI);

      if (response) {
        navigate("/Orders");
      } else {
        setErrorMessage("contraseña o nombre incorrecto");
      }
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="logo-container">
        <img src="/image/logo.png" alt="Logo" className="logo" />
      </header>

      <main className="login">
        <h1>Iniciar Sesión</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <section>
            <label htmlFor="nombre">Nombre</label>

            <input
              className="name-input"
              id="nombre"
              type="text"
              value={name}
              autoComplete="username"
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  passwordRef.current?.focus();
                }
              }}
            />

            <label htmlFor="password">Contraseña</label>
            <div className="password-wrapper">
              <input
                className="password-input"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                ref={passwordRef}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <p className="error-message">{errorMessage}</p>

            <button type="submit" className="button" disabled={isLoading}>
              {isLoading ? <div className="spinner"></div> : "Iniciar sesión"}
            </button>
          </section>
        </form>
      </main>
    </div>
  );
}
