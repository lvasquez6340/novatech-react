import styles from "./Cart.module.css";

const CartItem = ({ item, removeItem }) => {
  return (
    <article className={styles.card}>
      <div className={styles.productInfo}>
        <img
          className={styles.image}
          src={item.image}
          alt={item.name}
        />

        <div>
          <h3 className={styles.name}>
            {item.name}
          </h3>

          <p className={styles.text}>
            Cantidad: {item.quantity}
          </p>

          <p className={styles.text}>
            Precio unitario: ${item.price}
          </p>

          <p className={styles.text}>
            Subtotal: ${item.price * item.quantity}
          </p>

          <button
            className={styles.deleteButton}
            onClick={() => removeItem(item.id)}
          >
            🗑 Eliminar producto
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;