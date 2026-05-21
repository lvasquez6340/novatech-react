import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className={styles.status}>
        <h2>Cargando productos...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.status}>
        <h2>Hubo un error al cargar los productos.</h2>
      </section>
    );
  }

  return (
    <section>
      <h2 className={styles.title}>
        Productos destacados
      </h2>

      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
