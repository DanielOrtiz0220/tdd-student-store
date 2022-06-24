import * as React from "react";
import "./ProductCard.css";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  return (
    <div className="product-card">
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
      {showDescription ? (
        <p className="product-description">{product.description}</p>
      ) : null}
      <img className="product-image" src={product.image} alt={product.title} />
    </div>
  );
}
