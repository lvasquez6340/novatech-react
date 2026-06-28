import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getProducts();

        const filteredProducts = categoryId
          ? data.filter((product) => product.category === categoryId)
          : data;

        setProducts(filteredProducts);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <section className={styles.status}>
        <ClipLoader
          color="#005bea"
          size={60}
        />

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