import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);

    getDoc(refDoc)
      .then((res) => setItem({ ...res.data(), id: res.id }))
      .catch((error) => {
        console.error("Error fetching item:", error);
        navigate("/error");
      });
  }, [id, navigate]);

  const handleAddToCart = (quantity) => {
    const productoParaElCarrito = { ...item, quantity };
    addToCart(productoParaElCarrito);

    toast.success("Se agregó el producto al carrito", {
      closeButton: true,
      description: "Algo más",
      position: "top-center",
    });
  };

  return (
    <ItemDetail
      item={item}
      onAdd={handleAddToCart}
      totalItems={getTotalQuantityById(id)}
    />
  );
};

export default ItemDetailContainer;
