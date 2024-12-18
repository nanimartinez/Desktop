import { useState } from "react";
import PropTypes from "prop-types"; // Importar PropTypes
import "./Counter.css";

const Counter = ({ initial = 0, min = 0, max = 99, onCountChange }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  return (
    <div className="counter">
      <button
        className="counter-btn"
        onClick={decrement}
        disabled={count === min}
      >
        -
      </button>
      <span className="counter-value">{count}</span>
      <button
        className="counter-btn"
        onClick={increment}
        disabled={count === max}
      >
        +
      </button>
    </div>
  );
};

// Agregar validaciones para las props
Counter.propTypes = {
  initial: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onCountChange: PropTypes.func,
};

export default Counter;
