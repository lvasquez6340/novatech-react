import { useState } from "react";
import { createContactMessage } from "../../services/contactService";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSent(false);
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Por favor completá todos los campos.");
      return;
    }

    try {
      setLoading(true);

      await createContactMessage(form);

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setError("No se pudo enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <h1>Contacto</h1>

        <p className={styles.text}>
          ¿Tenés alguna consulta sobre nuestros productos?
          Escribinos y te responderemos a la brevedad.
        </p>

        {sent && (
          <p className={styles.success}>
            Mensaje enviado correctamente ✅
          </p>
        )}

        {error && (
          <p className={styles.error}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />

          <label>Mensaje</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Escribí tu mensaje..."
          />

          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;