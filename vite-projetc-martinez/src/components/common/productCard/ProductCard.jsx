import PropTypes from "prop-types"; // Importar PropTypes
import "./ProductCard.css";

const ProductCard = ({ title, price, quantity, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">Precio: ${price}</p>
      <p className="product-quantity">Cantidad: {quantity}</p>
    </div>
  );
};

// Definir las validaciones para las props
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
