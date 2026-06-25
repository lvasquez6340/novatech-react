import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";

const categories = [
  {
    name: "Smartphones",
    image: "/images/iphone14.jpg"
  },
  {
    name: "Auriculares",
    image: "/images/airpodspro2.jpg"
  },
  {
    name: "Smartwatch",
    image: "/images/applewatch9.jpg"
  },
  {
    name: "Laptops",
    image: "/images/macbookairm2.jpg"
  }
];

const CategoryList = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Categorías
      </h1>

      <div className={styles.grid}>
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/categoria/${category.name}`}
            className={styles.card}
          >
            <img
              src={category.image}
              alt={category.name}
              className={styles.image}
            />

            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;