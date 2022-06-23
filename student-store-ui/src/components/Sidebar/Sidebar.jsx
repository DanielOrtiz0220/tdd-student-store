import * as React from "react"
import "./Sidebar.css"
import Navbar from "../Navbar/Navbar"

export default function Sidebar() {
  return (
    <section className="sidenav">
      <Navbar />
      <p>Sidebar</p>
    </section>
  )
}
