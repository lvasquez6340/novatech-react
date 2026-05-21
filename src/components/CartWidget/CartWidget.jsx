import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <span className={styles.cartWidget}>
      🛒 Carrito ({getTotalQuantity()})
    </span>
  );
};

export default CartWidget;