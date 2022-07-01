import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import OpenSidebar from "../OpenSidebar/OpenSidebar";

export default function Sidebar({
  products,
  subtotal,
  setSubtotal,
  setProducts,
  orderObj,
  setOrderObj
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((s) => !s);
  };

  function renderSidebar() {
    if (isOpen) {
      return (
        <OpenSidebar
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          products={products}
          setProducts={setProducts}
          subtotal={subtotal}
          setSubtotal={setSubtotal}
          orderObj= {orderObj}
          setOrderObj = {setOrderObj}
        />
      );
    }

    return (
      <section className="sidebar closed">
        <div className="wrapper">
          <button className="toggle-button button closed" onClick={handleClick}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <div className="shopping-cart">
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <section className="sidebar">{renderSidebar()}</section>;
}
