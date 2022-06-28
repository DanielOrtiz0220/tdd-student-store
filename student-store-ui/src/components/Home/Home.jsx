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
  addAmountOfProduct,
  subAmountOfProduct,
  subtotal,
  setSubtotal,
  search,
  setSearch,
  setCategory,
}) {
  // function handleClick() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className="home">
      <Navbar /> 
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        products={products}
        setProducts={setProducts}
        subtotal={subtotal}
        setSubtotal={setSubtotal}
      />
      <Hero />
      <SubNavbar
        search={search}
        setSearch={setSearch}
        setCategory={setCategory}
      />
      <ProductGrid
        products={products}
        addAmountOfProduct={addAmountOfProduct}
        subAmountOfProduct={subAmountOfProduct}
        subtotal={subtotal}
        setSubtotal={setSubtotal}
      />
      <p>Footer</p>
    </div>
  );
}
