import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import { useEffect } from "react";

export default function ProductGrid({
  products,
  addAmountOfProduct,
  subAmountOfProduct,
  subtotal,
  setSubtotal,
}) {
  // useEffect(() => {
  //   (products);
  // }, []);
  return (
    <div className="product-grid">
      {products.map((item, idx) => {
        return (
          <ProductCard
            product={item}
            key={idx}
            showDescription={true}
            cardId={idx}
            addAmountOfProduct={addAmountOfProduct}
            subAmountOfProduct={subAmountOfProduct}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
          />
        );
      })}
    </div>
  );
}
