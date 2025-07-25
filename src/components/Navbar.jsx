import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <h1 className="heading">Mern Stack</h1>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
         <Link to="/shop">Shop</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
