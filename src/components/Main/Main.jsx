import styles from "./Main.module.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.label}>NUEVOS PRODUCTOS</p>

          <h1>Descubre lo último en tecnología</h1>

          <p className={styles.description}>
            Explora nuestra selección de productos de alta calidad a los mejores precios.
          </p>

          <Link to="/productos" className={styles.button}>
             Ver productos
          </Link>
        </div>

        <div className={styles.heroImage}>
          <img src="/hero-tech.png" alt="Productos tecnológicos" />
        </div>
      </section>

      <ItemListContainer />
    </main>
  );
};

export default Main;