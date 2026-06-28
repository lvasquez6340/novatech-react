import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  getProducts,
  deleteProduct
} from "../../services/productsService";
import styles from "./ProductAdminList.module.css";

const ProductAdminList = ({
  reloadProducts,
  onEdit
}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      setProducts(data);
    } catch (error) {
      console.error(error);
      setError("No se pudieron cargar los productos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [reloadProducts]);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "¿Seguro que querés eliminar este producto?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteProduct(id);

      setProducts(
        products.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error(error);
      setError("No se pudo eliminar el producto.");
    }
  };

  if (loading) {
    return (
      <section className={styles.container}>
        <h2>Productos registrados</h2>
        <p>Cargando productos...</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h2>Productos registrados</h2>

      {error && (
        <p className={styles.error}>
          {error}
        </p>
      )}

      {products.length === 0 ? (
        <p className={styles.empty}>
          Todavía no hay productos cargados.
        </p>
      ) : (
        <div className={styles.list}>
          {products.map((product) => (
            <article
              key={product.id}
              className={styles.card}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
              />

              <div className={styles.info}>
                <h3>
                  {product.name}
                </h3>

                <p>
                  Categoría: <strong>{product.category}</strong>
                </p>

                <p>
                  Precio: <strong>${product.price}</strong>
                </p>

                <p>
                  Stock: <strong>{product.stock}</strong>
                </p>
              </div>

              <div className={styles.actions}>
                <button
                  className={styles.editButton}
                  onClick={() => onEdit(product)}
                >
                  <FaEdit />
                  Editar
                </button>

                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(product.id)}
                >
                  <FaTrash />
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductAdminList;