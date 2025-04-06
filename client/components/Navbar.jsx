import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-box">
        <Link to="/" className="logo">
          Agostina Arias
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-links-box">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-links-box">
          <Link to="/about">About Me</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
