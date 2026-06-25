import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {

    fetch("/productos.json")

      .then((response) => {

        if (!response.ok) {
          throw new Error();
        }

        return response.json();

      })

      .then((data) => {

        const selectedProduct = data.find(
          (item) => item.id === Number(id)
        );

        if (!selectedProduct) {
          throw new Error();
        }

        setProduct(selectedProduct);

      })

      .catch(() => {
        setError(true);
      })

      .finally(() => {
        setLoading(false);
      });

  }, [id]);

  if (loading) {
    return <h1>Cargando producto...</h1>;
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