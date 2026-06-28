import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useCart } from "../../context/CartContext";
import { getProductById } from "../../services/productsService";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(false);

        const selectedProduct = await getProductById(id);

        setProduct(selectedProduct);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "80px"
        }}
      >
        <ClipLoader
          color="#005bea"
          size={60}
        />

        <h2>Cargando producto...</h2>
      </section>
    );
  }

  if (error) {
    return <h1>Producto no encontrado.</h1>;
  }

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <ItemDetail
      product={product}
      onAdd={handleAdd}
    />
  );
};

export default ItemDetailContainer;