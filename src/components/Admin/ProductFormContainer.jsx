import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductSuccess from "./ProductSuccess";
import { validateProduct } from "../../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productsService";

const ProductFormContainer = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    file: null
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateProduct(product);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      const imageUrl = await uploadImage(product.file);

      const newProduct = {
        name: product.name,
        price: Number(product.price),
        category: product.category,
        stock: Number(product.stock),
        description: product.description,
        image: imageUrl
      };

      await createProduct(newProduct);

      setProduct({
        name: "",
        price: "",
        category: "",
        stock: "",
        description: "",
        file: null
      });

      setSuccess(true);
    }  catch (error) {
  console.log("ERROR COMPLETO:", error);
  console.log("MENSAJE:", error.message);

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
        onBack={() => setSuccess(false)}
      />
    );
  }

  return (
    <ProductForm
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ProductFormContainer;