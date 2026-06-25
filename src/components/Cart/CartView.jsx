import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import styles from "./Cart.module.css";

const CartView = ({
  cart,
  total,
  clearCart,
  removeItem
}) => {
  if (cart.length === 0) {
    return (
      <section className={styles.container}>
        <h1 className={styles.title}>
          Carrito de compras
        </h1>

        <div className={styles.emptyBox}>
          <h2 className={styles.emptyTitle}>
            🛒 Tu carrito está vacío
          </h2>

          <p className={styles.emptyText}>
            Parece que eliminaste todos los productos.
          </p>

          <p className={styles.emptyText}>
            Explora nuestra colección de tecnología premium y encuentra algo que te guste.
          </p>

          <Link
            to="/productos"
            className={styles.shopButton}
          >
            Ver productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Carrito de compras
      </h1>

      <CartList
        cart={cart}
        removeItem={removeItem}
      />

      <CartSummary
        total={total}
        clearCart={clearCart}
      />
    </section>
  );
};

export default CartView;