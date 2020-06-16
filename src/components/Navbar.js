import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Data Tellers
    </Link>
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/about">
        About
      </Link>
      <Link className="nav-item nav-link" to="/upload">
        Upload a file
      </Link>
    </div>
  </nav>
);
