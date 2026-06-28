import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductSuccess from "./ProductSuccess";
import { validateProduct } from "../../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import {
  createProduct,
  updateProduct
} from "../../services/productsService";

const initialProduct = {
  name: "",
  price: "",
  category: "",
  stock: "",
  description: "",
  file: null,
  image: ""
};

const ProductFormContainer = ({
  productToEdit,
  onFinish,
  onCancelEdit
}) => {
  const [product, setProduct] = useState(initialProduct);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isEditing = Boolean(productToEdit);

  useEffect(() => {
    if (productToEdit) {
      setProduct({
        name: productToEdit.name || "",
        price: productToEdit.price || "",
        category: productToEdit.category || "",
        stock: productToEdit.stock || "",
        description: productToEdit.description || "",
        file: null,
        image: productToEdit.image || ""
      });

      setSuccess(false);
      setErrors({});
    }
  }, [productToEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleFileChange = (event) => {
    setProduct({
      ...product,
      file: event.target.files[0]
    });
  };

  const resetForm = () => {
    setProduct(initialProduct);
    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateProduct(
      product,
      isEditing
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      let imageUrl = product.image;

      if (product.file) {
        imageUrl = await uploadImage(product.file);
      }

      const productData = {
        name: product.name,
        price: Number(product.price),
        category: product.category,
        stock: Number(product.stock),
        description: product.description,
        image: imageUrl
      };

      if (isEditing) {
        await updateProduct(productToEdit.id, productData);
      } else {
        await createProduct(productData);
      }

      resetForm();
      setSuccess(true);
      onFinish();
    } catch (error) {
      console.log("ERROR COMPLETO:", error);

      setErrors({
        general: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <ProductSuccess
        isEditing={isEditing}
        onBack={() => setSuccess(false)}
      />
    );
  }

  return (
    <ProductForm
      product={product}
      errors={errors}
      loading={loading}
      isEditing={isEditing}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
      onCancelEdit={() => {
        resetForm();
        onCancelEdit();
      }}
    />
  );
};

export default ProductFormContainer;