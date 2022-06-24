import * as React from "react";
import "./ProductCard.css";

export default function ProductCard({
  product,
  productId,
  quantity,
  shoppingCart,
  setShoppingCart,
  handleRemoveItemToCart,
  showDescription,
  key
}) {
  const handleAddClick = () => {
    setShoppingCart((s) => s + 1);
  };
  const handleSubClick = () => {
    setShoppingCart((s) => {
      if (s <= 0) {
        return 0;
      } else {
        return s - 1;
      }
    });
  };

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.title} />
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      {showDescription ? (
        <p className="product-description">{product.description}</p>
      ) : null}

      <div className="add-sub-btns">
      <button className="subtract-item" onClick={handleSubClick}>
          <i className="material-icons-md-48">➖</i>
        </button>
        <p>{}</p>
        <button className="add-item" onClick={handleAddClick}>
          <i className="material-icons-md-48">➕</i>
        </button>


      </div>
    </div>
  );
}
