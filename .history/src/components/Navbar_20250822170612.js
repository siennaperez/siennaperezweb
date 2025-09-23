import "./Navbar.css";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className= "navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/experience">EXPERIENCE</Link>
        </li>
        <li className="nav-item">
          <Link to="/">SIENNA PEREZ</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li className="nav-item">
          <Link to="/posts">POSTS</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;