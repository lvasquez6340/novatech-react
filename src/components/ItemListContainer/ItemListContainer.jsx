import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch("/productos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }

        return response.json();
      })
      .then((data) => {
        const filteredProducts = categoryId
          ? data.filter((product) => product.category === categoryId)
          : data;

        setProducts(filteredProducts);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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
        {categoryId
          ? `Categoría: ${categoryId}`
          : "Productos destacados"}
      </h2>

      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;