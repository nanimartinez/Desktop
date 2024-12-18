/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext();
import PropTypes from "prop-types";
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const deleteProductById = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  };

  const getTotalQuantityById = (id) => {
    const productInCart = cart.find((item) => item.id === id);
    return productInCart ? productInCart.quantity : 0;
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const data = {
    cart,
    addToCart,
    deleteProductById,
    clearCart,
    getTotalAmount,
    getTotalItems,
    getTotalQuantityById,
    isInCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida la prop children
};
