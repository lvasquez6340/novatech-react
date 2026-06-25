import { useCart } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { getCartQuantity } = useCart();

  return (
    <span className={styles.cartWidget}>
      🛒 Carrito ({getCartQuantity()})
    </span>
  );
};

export default CartWidget;