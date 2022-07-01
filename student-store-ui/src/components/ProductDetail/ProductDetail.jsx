import * as React from "react";
import "./ProductDetail.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ProductDetail({
  products,
  setProducts,
  shoppingCart,
  setShoppingCart,
}) {
  const params = useParams();

  // using param created at the route component in app.jsx
  let productId = params.productId;

  const productName = products[productId - 1].name;
  const productPrice = products[productId - 1].price;
  const productDescription = products[productId - 1].description;
  const productImage = products[productId - 1].image;
  const productTitle = products[productId - 1].title;
  const showDescription = 1;

  useEffect(() => {
    // (productName);
    // (productDetailsUnit)
  }, []);

  return (
    <div className="ProductDetail">
      <Navbar />
      <Sidebar />
      <div className="product-card-details">
        <img
          className="product-image-details"
          src={productImage}
          alt={productTitle}
        />
        <p className="product-name-details">{productName}</p>
        <p className="product-price-details">${productPrice}</p>
        {showDescription ? (
          <p className="product-description-details">{productDescription}</p>
        ) : null}

        <div className="add-sub-btns">
          <button
            className="subtract-item"
            onClick={() => {
              handleSubClick();
            }}
          >
            <i className="material-icons-md-48">➖</i>
          </button>
          <p>0</p>
          <button
            className="add-item"
            onClick={() => {
              handleAddClick();
            }}
          >
            <i className="material-icons-md-48">➕</i>
          </button>
        </div>
      </div>
    </div>
  );
}
