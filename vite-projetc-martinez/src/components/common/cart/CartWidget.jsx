import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./CartWidget.css";

const CartWidget = () => {
  const [itemCount, setItemCount] = useState(0);

  const addItem = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <div className="cart-container" onClick={addItem}>
      <Badge badgeContent={itemCount} color="error">
        <ShoppingCartIcon className="cart-icon" />
      </Badge>
    </div>
  );
};

export default CartWidget;
