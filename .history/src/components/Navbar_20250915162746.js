import "./Navbar.css";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className= "navbar">
      <ul className="nav-list">
        <div class="nav-left">
      <li class="nav-item"><a href="/about">ABOUT</a></li>
      <li class="nav-item"><a href="/experience">EXPERIENCE</a></li>
    </div>
    
    <div class="nav-center">
      <li class="nav-item"><a href="/">SIENNA PEREZ</a></li>
    </div>
    
    <div class="nav-right">
      <li class="nav-item"><a href="/projects">PROJECTS</a></li>
      <li class="nav-item"><a href="/posts">POSTS</a></li>
    </div>
      </ul>

    </nav>
  );
}

export default Navbar;