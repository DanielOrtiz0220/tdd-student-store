import * as React from "react";
import "./ProductCard.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function ProductCard({
  product,
  showDescription,
  addAmountOfProduct,
  subAmountOfProduct,
  subtotal,
  setSubtotal,
}) {
  // const handleProductClick = () => {
  //   <Link className="product-details" id="product-details-link" to="/products/:productId" />
  // }
  const [buyingAmount, setBuyingAmount] = useState(0);

  var USDformatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function addQuantity() {
    addAmountOfProduct(product.id);
    setBuyingAmount(buyingAmount + 1);
    setSubtotal(subtotal + product.price);
  }
  function subQuantity() {
    subAmountOfProduct(product.id);
    setBuyingAmount(buyingAmount - 1);
    setSubtotal(subtotal - product.price);
  }

  return (
    <div className="product-card">
      <Link
        className="product-details"
        id="product-details-link"
        to={`/products/${product.id}`}
      >
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <p className="product-name">{product.name}</p>
      <p className="product-price">{USDformatter.format(product.price)}</p>
      {showDescription ? (
        <p className="product-description">{product.description}</p>
      ) : null}

      <div className="add-sub-btns">
        <button className="subtract-item" onClick={addQuantity}>
          <i className="material-icons-md-48">➖</i>
        </button>
        <p>{buyingAmount}</p>
        <button className="add-item" onClick={subQuantity}>
          <i className="material-icons-md-48">➕</i>
        </button>
      </div>
    </div>
  );
}
