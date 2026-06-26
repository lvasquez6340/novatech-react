import { useAuth } from "../../context/AuthContext";
import ProductFormContainer from "./ProductFormContainer";
import styles from "./Admin.module.css";

const Admin = () => {
  const { user, logoutUser } = useAuth();

  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <p className={styles.label}>PANEL DE ADMINISTRACIÓN</p>

        <h1 className={styles.title}>
          Panel NovaTech
        </h1>

        <p className={styles.user}>
          Usuario autenticado: <strong>{user?.email}</strong>
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <span>📦</span>
            <h3>Productos</h3>
            <p>Gestionar catálogo</p>
          </div>

          <div className={styles.card}>
            <span>➕</span>
            <h3>Agregar</h3>
            <p>Crear nuevo producto</p>
          </div>

          <div className={styles.card}>
            <span>✏️</span>
            <h3>Editar</h3>
            <p>Actualizar información</p>
          </div>

          <div className={styles.card}>
            <span>🗑️</span>
            <h3>Eliminar</h3>
            <p>Quitar productos</p>
          </div>
        </div>

        <ProductFormContainer />

        <button
          className={styles.logout}
          onClick={logoutUser}
        >
          Cerrar sesión
        </button>
      </div>
    </section>
  );
};

export default Admin;