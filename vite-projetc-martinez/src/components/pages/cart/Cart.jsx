import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  const limpiarConAlert = () => {
    Swal.fire({
      title: "¿Estás seguro que quieres limpiar el carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí, limpiar",
      denyButtonText: "No, dejar como estaba",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se limpió el carrito",
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "El carrito queda como estaba",
        });
      }
    });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Este es el carrito</h2>
      {cart.length === 0 ? ( // Comprueba la longitud del array para el mensaje
        <h2>No tienes elementos todavía</h2>
      ) : (
        cart.map((product) => (
          <div key={product.id}>
            <h2>Título: {product.title}</h2>
            <h3>Precio: ${product.price}</h3>
            <h3>Cantidad: {product.quantity}</h3>
            <h3>Subtotal: ${product.price * product.quantity}</h3>
            <Button
              variant="contained"
              onClick={() => deleteProductById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        ))
      )}

      {total > 0 && ( // Muestra botones solo si hay total
        <>
          <Button
            sx={{ marginTop: 20 }}
            variant="contained"
            onClick={limpiarConAlert}
          >
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button sx={{ marginTop: 20 }} variant="contained">
              Finalizar compra
            </Button>
          </Link>
        </>
      )}

      {total > 0 && <h2>El total a pagar es: $ {total}</h2>}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired, // Array obligatorio de productos
  clearCart: PropTypes.func.isRequired, // Función obligatoria para limpiar carrito
  deleteProductById: PropTypes.func.isRequired, // Función obligatoria para eliminar por id
  total: PropTypes.number.isRequired, // Número obligatorio del total
};

export default Cart;
