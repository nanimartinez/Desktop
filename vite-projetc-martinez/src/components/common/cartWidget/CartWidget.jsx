import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import "./CartWidget.css";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  const totalItems = getTotalItems();

  return (
    <div className="cart-widget-container">
      {" "}
      {/* Contenedor para estilos */}
      <IconButton aria-label="cart">
        {" "}
        {/* Usa IconButton para mejor accesibilidad */}
        <Badge
          badgeContent={totalItems}
          color="primary"
          max={99}
          showZero={true}
        >
          {" "}
          {/* Aumenté el max a 99 */}
          <ShoppingCartIcon className="cart-icon" />{" "}
          {/* Clase para estilizar el ícono */}
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
