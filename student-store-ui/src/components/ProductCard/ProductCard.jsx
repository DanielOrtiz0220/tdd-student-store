import * as React from "react";
import "./ProductCard.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function ProductCard({
  product,
  productId,
  quantity,
  shoppingCart,
  setShoppingCart,
  handleRemoveItemToCart,
  showDescription,
  cardId,
}) {
  // const handleProductClick = () => {
  //   <Link className="product-details" id="product-details-link" to="/products/:productId" />
  // }

  useEffect(() => {
    console.log(cardId);
    console.log(shoppingCart[cardId]);
  }, []);

  const handleAddClick = () => {
    setShoppingCart(shoppingCart[cardId] + 1);
  };
  const handleSubClick = () => {
    if (cardQuantity <= 0) {
      return setShoppingCart(0);
    }
    return setShoppingCart(cardQuantity - 1);
  };

  return (
    <div className="product-card">
      <Link
        className="product-details"
        id="product-details-link"
        to={"/products/" + cardId}
      >
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      {showDescription ? (
        <p className="product-description">{product.description}</p>
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
  );
}
