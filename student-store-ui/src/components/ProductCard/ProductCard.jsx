import * as React from "react";
import "./Home.css";

export default function ProductCard(
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription
) {
  return (
    <div className="product-card">
      <p className="product-name">Banana</p>
      <p className="product-price">${product.price}</p>
      showDescription ? (
      <p className="product-description">${product.description}</p>
      ) : ()
      <img class="product-image" src={product.img} alt={product.title} />
    </div>
  );
}
