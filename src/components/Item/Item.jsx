import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import { useCart } from "../../context/CartContext";

const Item = ({
  id,
  name,
  price,
  category,
  image,
  stock
}) => {
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    const product = {
      id,
      name,
      price,
      category,
      image,
      stock
    };

    addToCart(product, quantity);
  };

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>

      <p className={styles.category}>
        {category}
      </p>

      <Link
        to={`/producto/${id}`}
        className={styles.link}
      >
        <h3 className={styles.name}>
          {name}
        </h3>
      </Link>

      <p className={styles.price}>
        ${price}
      </p>

      <ItemCount
        stock={stock}
        onAdd={handleAdd}
      />
    </article>
  );
};

export default Item;