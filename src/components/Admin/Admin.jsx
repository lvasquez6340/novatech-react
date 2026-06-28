import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ProductFormContainer from "./ProductFormContainer";
import ProductAdminList from "./ProductAdminList";
import { FaBoxOpen, FaPlusCircle, FaEdit, FaTrash, FaEnvelope } from "react-icons/fa";
import ContactAdminList from "./ContactAdminList";
import styles from "./Admin.module.css";

const Admin = () => {
  const { user, logoutUser } = useAuth();
  const [productToEdit, setProductToEdit] = useState(null);
  const [reloadProducts, setReloadProducts] = useState(false);

  const refreshProducts = () => {
    setReloadProducts(!reloadProducts);
  };

  const goToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleEdit = (product) => {
    setProductToEdit(product);
    goToSection("product-form");
  };

  const handleFinishForm = () => {
    setProductToEdit(null);
    refreshProducts();
  };

  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <p className={styles.label}>PANEL DE ADMINISTRACIÓN</p>

        <h1 className={styles.title}>Panel NovaTech</h1>

        <p className={styles.user}>
          Usuario autenticado:
          <strong> {user?.email}</strong>
        </p>

        <div className={styles.cards}>
          <button
            className={styles.card}
            onClick={() => goToSection("product-list")}
          >
            <span>📦</span>
            <h3>Productos</h3>
            <p>Gestionar catálogo</p>
          </button>

          <button
            className={styles.card}
            onClick={() => {
              setProductToEdit(null);
              goToSection("product-form");
            }}
          >
            <span>➕</span>
            <h3>Agregar</h3>
            <p>Crear nuevo producto</p>
          </button>

          <button
            className={styles.card}
            onClick={() => goToSection("product-list")}
          >
            <span>✏️</span>
            <h3>Editar</h3>
            <p>Actualizar información</p>
          </button>

          <button
            className={styles.card}
            onClick={() => goToSection("product-list")}
          >
            <span>🗑️</span>
            <h3>Eliminar</h3>
            <p>Quitar productos</p>
          </button>
          <button
  className={styles.card}
  onClick={() => goToSection("contact-list")}
>
  <span><FaEnvelope /></span>
  <h3>Mensajes</h3>
  <p>Ver consultas recibidas</p>
</button>
        </div>

        <div id="product-form">
          <ProductFormContainer
            productToEdit={productToEdit}
            onFinish={handleFinishForm}
            onCancelEdit={() => setProductToEdit(null)}
          />
        </div>

        <div id="product-list">
          <ProductAdminList
            reloadProducts={reloadProducts}
            onEdit={handleEdit}
          />
        </div>
        <div id="contact-list">
  <ContactAdminList />
</div>

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