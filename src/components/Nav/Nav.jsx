import styles from "./Nav.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Nav = () => {

  return (

    <nav className={styles.nav}>

      <ul className={styles.menu}>

        <li>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            Inicio
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            Productos
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            Categorías
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            Contacto
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/carrito"
            className={({ isActive }) =>
              isActive
                ? `${styles.cart} ${styles.active}`
                : styles.cart
            }
          >
            <CartWidget />
          </NavLink>

        </li>

      </ul>

    </nav>

  );

};

export default Nav;