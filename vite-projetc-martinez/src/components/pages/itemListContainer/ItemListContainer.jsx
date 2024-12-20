import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); // undefined.title

  const { categoryName } = useParams(); // {} -- { categoryName }

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection; // el va saber a quien pedirle los documentos si a todos o a una parte

    if (categoryName) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", categoryName)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta).then((res) => {
      let array = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setItems(array);
    });
  }, [categoryName]);

  const agregarProductos = () => {
    products.forEach((producto) => {
      addDoc(collection(db, "products"), producto);
    });
  };

  return (
    <>
      <ItemList items={items} />
      {<button onClick={agregarProductos}>Agregar</button>}
    </>
  );
};

export default ItemListContainer;
