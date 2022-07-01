import * as React from "react";
import "./OpenSidebar.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";

export default function OpenSidebar({
  isOpen,
  setIsOpen,
  products,
  setProducts,
  subtotal,
  setSubtotal,
  orderObj,
  setOrderObj
}) {
  const filtered_products = products.filter((product) => product.amount > 0);

  const [checkedOut, setCheckedOut] = useState(false);
  const [formOneValue, setFormOneValue] = useState("");
  const [formTwoValue, setFormTwoValue] = useState("");

  return (
    <section className="sidebar open">
      <div className="wrapper">
        <button
          className="toggle-button button open"
          onClick={() => setIsOpen((s) => !s)}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="open">
            <ShoppingCart
              products={products}
              subtotal={subtotal}
              setSubtotal={setSubtotal}
              orderObj = {orderObj}
              setOrderObj = {setOrderObj}
            />
            <CheckoutForm
              setCheckedOut={setCheckedOut}
              setFormOneValue={setFormOneValue}
              setFormTwoValue={setFormTwoValue}
              formOneValue={formOneValue}
              formTwoValue={formTwoValue}
              orderObj = {orderObj}
              setOrderObj = {setOrderObj}
            />
            <CheckoutSuccess
              filtered_products={filtered_products}
              checkedOut={checkedOut}
              formOneValue={formOneValue}
              formTwoValue={formTwoValue}
              subtotal={subtotal}
              setProducts={setProducts}
              products={products}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
