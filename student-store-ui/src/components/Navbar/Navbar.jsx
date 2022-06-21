import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="navs" id = "home" href = "/" >Home</a>
      <a className="navs" id = "about-us" href = "/products/:productId">Buy Now</a>
      {/* <Link className="navs" id = "contact-us">Contact us</Link> */}
    </nav>
  )
}
