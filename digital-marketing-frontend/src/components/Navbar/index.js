// components/Navbar.js
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/services" className="nav-link">
        Services
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
