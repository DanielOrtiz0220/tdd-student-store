import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  setShoppingCart,
}) {
  return (
    <div className="product-grid">
      {products.map((item, idx) => {
        return (
          <ProductCard
            product={item}
            key={idx}
            showDescription={true}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        );
      })}
    </div>
  );
}
