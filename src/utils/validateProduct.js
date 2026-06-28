export const validateProduct = (product, isEditing = false) => {
  const errors = {};

  if (!product.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!product.price || Number(product.price) <= 0) {
    errors.price = "El precio debe ser mayor que 0";
  }

  if (!product.category.trim()) {
    errors.category = "La categoría es obligatoria";
  }

  if (!product.stock || Number(product.stock) < 0) {
    errors.stock = "El stock no puede ser negativo";
  }

  if (!product.description.trim()) {
    errors.description = "La descripción es obligatoria";
  }

  if (!isEditing && !product.file) {
    errors.file = "Debes seleccionar una imagen";
  }

  return errors;
};