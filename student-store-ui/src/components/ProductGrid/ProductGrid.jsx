import * as React from "react"
import "./Home.css"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="product-grid ">{
      products.map((item) => {
        
      })}
    </div>
  )
}
