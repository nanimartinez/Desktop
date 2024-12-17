import CartWidget from "../../common/cart/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>BeautyShop</h2>
      </div>
      <div className="navbar-menu">
        <select className="navbar-select">
          <option value="all">Todo</option>
          <option value="foundations">Bases</option>
          <option value="lipsticks">Labiales</option>
          <option value="eyeshadows">Sombras</option>
        </select>
      </div>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
