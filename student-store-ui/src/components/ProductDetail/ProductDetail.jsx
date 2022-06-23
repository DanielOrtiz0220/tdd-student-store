import * as React from "react";
import "./ProductDetail.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function ProductDetail() {
  return (
    <div className="ProductDetail">
      <Navbar />
      <Sidebar />
      <p>Products available today</p>
    </div>
  );
}
