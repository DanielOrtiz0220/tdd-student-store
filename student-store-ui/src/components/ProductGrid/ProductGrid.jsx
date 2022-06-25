import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import { useEffect } from "react";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  setShoppingCart,
}) {
  useEffect(() => {
    console.log(shoppingCart);
  }, []);
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
            cardId={idx}
          />
        );
      })}
    </div>
  );
}
