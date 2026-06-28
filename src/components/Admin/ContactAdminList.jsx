import { useEffect, useState } from "react";
import { FaTrash, FaEnvelope } from "react-icons/fa";
import {
  getContactMessages,
  deleteContactMessage
} from "../../services/contactService";
import styles from "./ContactAdminList.module.css";

const ContactAdminList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadMessages = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getContactMessages();
      setMessages(data);
    } catch (error) {
      console.error(error);
      setError("No se pudieron cargar los mensajes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "¿Seguro que querés eliminar este mensaje?"
    );

    if (!confirmDelete) return;

    try {
      await deleteContactMessage(id);

      setMessages(
        messages.filter((message) => message.id !== id)
      );
    } catch (error) {
      console.error(error);
      setError("No se pudo eliminar el mensaje.");
    }
  };

  if (loading) {
    return (
      <section className={styles.container}>
        <h2>Mensajes recibidos</h2>
        <p>Cargando mensajes...</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h2>
        <FaEnvelope /> Mensajes recibidos
      </h2>

      {error && <p className={styles.error}>{error}</p>}

      {messages.length === 0 ? (
        <p className={styles.empty}>
          Todavía no hay mensajes recibidos.
        </p>
      ) : (
        <div className={styles.list}>
          {messages.map((message) => (
            <article
              key={message.id}
              className={styles.card}
            >
              <div>
                <h3>{message.name}</h3>

                <p>
                  <strong>Email:</strong> {message.email}
                </p>

                <p className={styles.message}>
                  {message.message}
                </p>
              </div>

              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(message.id)}
              >
                <FaTrash />
                Eliminar
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ContactAdminList;