import styles from "./Cart.module.css";

const CartSummary = ({ total, clearCart }) => {
  return (
    <>
      <h2 className={styles.total}>
        Total: ${total}
      </h2>

      <button
        className={styles.button}
        onClick={clearCart}
      >
        Vaciar carrito
      </button>
    </>
  );
};

export default CartSummary;