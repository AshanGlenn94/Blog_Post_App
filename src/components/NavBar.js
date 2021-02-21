import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/posts">
          <li>Posts</li>
        </Link>
        <Link style={navStyle} to="/users">
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
