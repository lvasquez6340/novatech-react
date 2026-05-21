import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.brandHeader}>
            <img
              src={logo}
              alt="Logo NovaTech"
              className={styles.logo}
            />

            <h2>NovaTech</h2>
          </div>

          <p>Tecnología moderna y productos premium.</p>
        </div>

        <div className={styles.team}>
          <h3>Nuestro equipo</h3>
          <p><strong>Luis Vásquez</strong> — Frontend Developer</p>
          <p><strong>Ana Romero</strong> — UX/UI Designer</p>
          <p><strong>Carlos Ruiz</strong> — Backend Developer</p>
        </div>

        <div className={styles.links}>
          <h3>Enlaces</h3>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Categorías</a>
          <a href="#">Contacto</a>
        </div>

        <div className={styles.social}>
          <h3>Síguenos</h3>

          <div className={styles.icons}>
            <span>📘</span>
            <span>📸</span>
            <span>🐙</span>
          </div>
        </div>
      </section>

      <p className={styles.copy}>
        © 2026 NovaTech. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;