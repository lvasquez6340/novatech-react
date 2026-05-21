import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          image={product.image}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;