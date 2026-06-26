import styles from "./ProductForm.module.css";

const ProductForm = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2>Agregar nuevo producto</h2>

      {errors.general && (
        <p className={styles.error}>{errors.general}</p>
      )}

      <label>Nombre</label>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={onChange}
      />
      {errors.name && <p className={styles.error}>{errors.name}</p>}

      <label>Precio</label>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={onChange}
      />
      {errors.price && <p className={styles.error}>{errors.price}</p>}

      <label>Categoría</label>
      <select
        name="category"
        value={product.category}
        onChange={onChange}
      >
        <option value="">Seleccionar categoría</option>
        <option value="Smartphones">Smartphones</option>
        <option value="Auriculares">Auriculares</option>
        <option value="Smartwatch">Smartwatch</option>
        <option value="Laptops">Laptops</option>
      </select>
      {errors.category && <p className={styles.error}>{errors.category}</p>}

      <label>Stock</label>
      <input
        type="number"
        name="stock"
        value={product.stock}
        onChange={onChange}
      />
      {errors.stock && <p className={styles.error}>{errors.stock}</p>}

      <label>Descripción</label>
      <textarea
        name="description"
        value={product.description}
        onChange={onChange}
      />
      {errors.description && <p className={styles.error}>{errors.description}</p>}

      <label>Imagen</label>
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
      {errors.file && <p className={styles.error}>{errors.file}</p>}

      {product.file && (
        <p className={styles.preview}>
          Imagen seleccionada: {product.file.name}
        </p>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Guardando..." : "Guardar producto"}
      </button>
    </form>
  );
};

export default ProductForm;