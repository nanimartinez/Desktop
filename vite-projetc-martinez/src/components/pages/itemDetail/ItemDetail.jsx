import PropTypes from "prop-types";
import "./itemDetail.css";
import Counter from "../../common/counter/Counter";

const ItemDetail = ({ item, onAdd, initialQuantity = 1 }) => {
  return (
    <div className="item-detail-container">
      <h1>{item.title}</h1>
      <Counter
        quantity={initialQuantity}
        onQuantityChange={() => {}} // Placeholder, se maneja en el padre
        stock={item.stock}
        onAdd={onAdd}
        disabled={item.stock === 0}
      />
    </div>
  );
};

ItemDetail.propTypes = {
  // Define las validaciones de las props
  item: PropTypes.shape({
    // Valida que item sea un objeto con ciertas propiedades
    title: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    // ... otras propiedades del item
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  initialQuantity: PropTypes.number, // initialQuantity es opcional (ya tiene un valor por defecto)
};

export default ItemDetail;
