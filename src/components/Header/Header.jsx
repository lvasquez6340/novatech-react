import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.logoContainer}>

        <img
          src={logo}
          alt="Logo NovaTech"
          className={styles.logo}
        />

        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            NovaTech
          </h1>

          <p className={styles.subtitle}>
            Tecnología sin límites
          </p>
        </div>

      </div>

    </header>
  );
};

export default Header;