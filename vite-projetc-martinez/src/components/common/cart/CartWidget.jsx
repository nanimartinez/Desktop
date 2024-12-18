import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./CartWidget.css";
import Counter from "../counter/Counter";

const CartWidget = () => {
  const [itemCount, setItemCount] = useState(0);

  // Función para actualizar el contador desde el Counter
  const updateCount = (newCount) => {
    setItemCount(newCount);
  };

  return (
    <div className="cart-widget">
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartIcon className="cart-icon" />
      </Badge>
      <Counter initial={itemCount} onCountChange={updateCount} />
    </div>
  );
};

export default CartWidget;
