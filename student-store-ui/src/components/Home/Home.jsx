import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({ products, setProducts }) {
  return (
    <div className="home">
      <Navbar /> 
      <Sidebar />
      <ProductGrid products={products} />
      <p>Home</p>
    </div>
  );
}
