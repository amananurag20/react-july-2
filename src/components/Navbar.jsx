import { Link } from "react-router-dom";
import "./Navbar.css";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  
  const {theme, setTheme}= useContext(ThemeContext);

  

  return (
    <div className="container">
      <h1 className="heading">Mern Stack</h1>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
         <Link to="/shop">Shop</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link>{theme}</Link>
      </div>
    </div>
  );
};

export default Navbar;
