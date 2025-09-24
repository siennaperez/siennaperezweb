import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* Left side */}
        <div className="nav-left">
          <li className="nav-item">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience">EXPERIENCE</NavLink>
          </li>
        </div>

        {/* Center */}
        <div className="nav-center">
          <li className="nav-item">
            <NavLink to="/">SIENNA PEREZ</NavLink>
          </li>
        </div>

        {/* Right side */}
        <div className="nav-right">
          <li className="nav-item">
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts">POSTS</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
