import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
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
      <ProductGrid products={products} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      {/* <button
        className="open-nav"
        src="src/assets/icons8-menu-24.png"
        alt="menu icon"
        onClick={handleClick}
      >
        menu
      </button> */}
      <p>Home</p>
    </div>
  );
}
