import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/productos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el producto");
        }

        return response.json();
      })
      .then((data) => {
        const selectedProduct = data.find(
          (item) => item.id === Number(id)
        );

        if (!selectedProduct) {
          throw new Error("Producto no encontrado");
        }

        setProduct(selectedProduct);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className={styles.container}>
        <h1 className={styles.notFound}>Cargando producto...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.container}>
        <h1 className={styles.notFound}>Producto no encontrado.</h1>
      </section>
    );
  }

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <section className={styles.container}>
      <div className={styles.detailCard}>
        <div className={styles.imageBox}>
          <span className={styles.image}>
            {product.image}
          </span>
        </div>

        <div className={styles.info}>
          <p className={styles.category}>
            {product.category}
          </p>

          <h1 className={styles.name}>
            {product.name}
          </h1>

          <p className={styles.description}>
            Producto seleccionado de la colección NovaTech. Tecnología moderna,
            rendimiento confiable y diseño pensado para el uso diario.
          </p>

          <p className={styles.price}>
            ${product.price}
          </p>

          <p className={styles.stock}>
            Stock disponible: <strong>{product.stock}</strong>
          </p>

          <ItemCount
            stock={product.stock}
            onAdd={handleAdd}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;