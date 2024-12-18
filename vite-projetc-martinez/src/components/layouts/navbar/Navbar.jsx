import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Carrito from "./Carrito";
import "./Navbar.css";
import logo from "./assets/logo.png"; // Importa tu logo

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = [
    // Datos de las categorías
    { title: "Todo", path: "/" },
    { title: "Bases", path: "/bases" },
    { title: "Labiales", path: "/labiales" },
    { title: "Sombras", path: "/sombras" },
  ];

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        {" "}
        {/* Añadido un className al Toolbar */}
        <Link to="/" className="logo-link">
          {" "}
          {/* Enlaza el logo */}
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        {/* Menú desplegable */}
        <div className="menu-container">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            className="menu-icon"
          >
            <MenuIcon style={{ color: "#e91e63" }} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {categories.map(({ title, path }) => (
              <MenuItem key={title} onClick={handleClose}>
                <Link to={path} className="menu-link">
                  {title}
                </Link>{" "}
                {/* Enlaces dentro del menú */}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className="cart-container">
          {" "}
          {/* Contenedor para alinear el carrito a la derecha */}
          <Link to="/cart" className="cart-link">
            <Carrito />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
