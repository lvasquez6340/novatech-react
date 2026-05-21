import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {

  const {
    cart,
    getTotalPrice,
    clearCart
  } = useContext(CartContext);

  if (cart.length === 0) {

    return (

      <section className={styles.container}>

        <h1 className={styles.title}>
          Carrito de compras
        </h1>

        <p className={styles.empty}>
          Tu carrito está vacío.
        </p>

      </section>

    );

  }

  return (

    <section className={styles.container}>

      <h1 className={styles.title}>
        Carrito de compras
      </h1>

      {cart.map((item) => (

        <article
          key={item.id}
          className={styles.card}
        >

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

        </article>

      ))}

      <h2 className={styles.total}>
        Total: ${getTotalPrice()}
      </h2>

      <button
        className={styles.button}
        onClick={clearCart}
      >
        Vaciar carrito
      </button>

    </section>

  );

};

export default Cart;