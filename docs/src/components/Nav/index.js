import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand justify-content-center justify-content-md-end">
      <div class="navbar-nav">
        <Link
          to="/"
          className={
            window.location.pathname === "/"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className={
            window.location.pathname === "/portfolio"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={
            window.location.pathname === "/contact"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
