import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navs" id="home" to="/">
        Home
      </Link>
      <Link className="navs" id="contact-us" to="/contactus">
        Contact us
      </Link>
      <Link className="navs" id="about-us" to="/aboutus">
        About us
      </Link>
    </nav>
  );
}
