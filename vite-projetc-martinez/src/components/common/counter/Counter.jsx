import PropTypes from "prop-types"; // Importa PropTypes
import { Button, TextField } from "@mui/material";
import "./Counter.css";

const Counter = ({ quantity, onAdd, onQuantityChange, stock }) => {
  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value, 10) || 0;
    if (inputValue <= stock) {
      onQuantityChange(inputValue);
    } else {
      onQuantityChange(stock);
    }
  };

  return (
    <div className="counter-container">
      <div className="quantity-controls">
        <Button
          variant="contained"
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          className="counter-button"
        >
          -
        </Button>
        <TextField
          type="number"
          value={quantity}
          onChange={handleInputChange}
          inputProps={{ min: 1, max: stock }}
          className="quantity-input"
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          onClick={() => onQuantityChange(Math.min(stock, quantity + 1))}
          disabled={quantity >= stock}
          className="counter-button"
        >
          +
        </Button>
      </div>
      <Button
        variant="contained"
        onClick={() => onAdd(quantity)}
        disabled={quantity === 0}
        className="add-to-cart-button"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

Counter.propTypes = {
  quantity: PropTypes.number.isRequired, // Valida que quantity sea un número y sea obligatoria
  onAdd: PropTypes.func.isRequired, // Valida que onAdd sea una función y sea obligatoria
  onQuantityChange: PropTypes.func.isRequired, // Valida que onQuantityChange sea una función y sea obligatoria
  stock: PropTypes.number.isRequired, // Valida que stock sea un número y sea obligatoria
};

export default Counter;
