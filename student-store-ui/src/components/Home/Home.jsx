import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import SubNavbar from "../SubNavbar/SubNavbar";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({
  products,
  setProducts,
  isOpen,
  setIsOpen,
  shoppingCart,
  setShoppingCart,
}) {
  // function handleClick() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className="home">
      <Navbar /> 
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <SubNavbar />
      <ProductGrid
        products={products}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
      <p>Footer</p>
    </div>
  );
}
