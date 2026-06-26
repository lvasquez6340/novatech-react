import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Auth.module.css";

const Register = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      await registerUser(email, password);
      navigate("/admin");
    } catch (error) {
  console.log(error.code);
  console.log(error.message);
  setError(error.message);
}
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Crear cuenta</h1>

        {error && <p className={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">
          Registrarme
        </button>

        <p>
          ¿Ya tenés cuenta?{" "}
          <Link to="/login">
            Iniciar sesión
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;