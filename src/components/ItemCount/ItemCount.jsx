import { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, onAdd }) => {

  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (quantity > 0) {
      onAdd(quantity);
    }
  };

  return (

    <div className={styles.wrapper}>

      <div className={styles.counter}>

        <button
          className={styles.button}
          onClick={decrease}
        >
          -
        </button>

        <span className={styles.quantity}>
          {quantity}
        </span>

        <button
          className={styles.button}
          onClick={increase}
        >
          +
        </button>

      </div>

      <button
        className={styles.addButton}
        onClick={handleAdd}
      >
        Agregar al carrito
      </button>

    </div>

  );
};

export default ItemCount;