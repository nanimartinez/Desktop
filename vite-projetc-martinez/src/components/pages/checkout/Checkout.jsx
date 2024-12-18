import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import "./checkout.css";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cartItems, getTotalAmount, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Validar el formulario antes de enviar
  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", phone: "", email: "" };

    if (user.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
      valid = false;
    }

    if (!/^\d{10}$/.test(user.phone)) {
      newErrors.phone = "El teléfono debe tener 10 dígitos.";
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "El correo electrónico no es válido.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const total = getTotalAmount();

    const order = {
      buyer: user,
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    const refCollection = collection(db, "orders");

    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((error) => {
        console.error("Error al guardar la orden:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((item) => {
      updateDoc(doc(db, "products", item.id), {
        stock: item.stock - item.quantity,
      });
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="checkout-container">
      {orderId ? (
        <h1 className="success-message">
          🎉 ¡Gracias por tu compra! El número de orden es:{" "}
          <strong>{orderId}</strong>
        </h1>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre"
              onChange={handleChange}
              name="name"
              value={user.name}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Teléfono"
              onChange={handleChange}
              name="phone"
              value={user.phone}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={user.email}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <button type="submit" className="checkout-button">
            Finalizar Compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
