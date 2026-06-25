import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <section className={styles.container}>
      <div className={styles.detailCard}>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className={styles.info}>
          <p className={styles.category}>
            {product.category}
          </p>

          <h1 className={styles.name}>
            {product.name}
          </h1>

          <p className={styles.description}>
            Producto seleccionado de la colección NovaTech.
            Tecnología moderna, rendimiento confiable y diseño pensado para el uso diario.
          </p>

          <p className={styles.price}>
            ${product.price}
          </p>

          <p className={styles.stock}>
            Stock disponible:
            <strong> {product.stock}</strong>
          </p>

          <ItemCount
            stock={product.stock}
            onAdd={onAdd}
          />
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;