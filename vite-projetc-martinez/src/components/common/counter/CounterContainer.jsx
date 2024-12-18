import { useState } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

const CounterContainer = ({ onAdd, stock, initialQuantity = 1, item }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <Counter
      quantity={quantity}
      onQuantityChange={setQuantity}
      stock={stock}
      onAdd={handleAdd}
      disabled={item.stock === 0}
    />
  );
};

CounterContainer.propTypes = {
  onAdd: PropTypes.func.isRequired,
  stock: PropTypes.number.isRequired,
  initialQuantity: PropTypes.number,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default CounterContainer;
