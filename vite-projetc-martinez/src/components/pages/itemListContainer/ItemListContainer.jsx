import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";

const products = [
  {
    id: 1,
    title: "Base Líquida Matte",
    price: 25.99,
    quantity: 10,
    image: "https://via.placeholder.com/200?text=Base+Líquida",
  },
  {
    id: 2,
    title: "Labial Rojo Intenso",
    price: 15.49,
    quantity: 20,
    image: "https://via.placeholder.com/200?text=Labial+Rojo",
  },
  {
    id: 3,
    title: "Sombra de Ojos Nude",
    price: 18.75,
    quantity: 15,
    image: "https://via.placeholder.com/200?text=Sombra+Nude",
  },
  {
    id: 4,
    title: "Rubor Rosa Suave",
    price: 12.99,
    quantity: 25,
    image: "https://via.placeholder.com/200?text=Rubor+Rosa",
  },
];

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
