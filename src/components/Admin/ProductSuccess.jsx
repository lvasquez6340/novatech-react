import styles from "./ProductForm.module.css";

const ProductSuccess = ({ onBack }) => {
  return (
    <div className={styles.success}>
      <h2>✅ Producto agregado correctamente</h2>

      <p>
        El producto fue guardado en Firebase y la imagen se subió correctamente.
      </p>

      <button onClick={onBack}>
        Agregar otro producto
      </button>
    </div>
  );
};

export default ProductSuccess;