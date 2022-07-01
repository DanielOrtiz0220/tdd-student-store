import React from "react";
import { useState } from "react";
import CartTable from "../CartTable/CartTable";

function ShoppingCart({ products, subtotal, setSubtotal, orderObj, setOrderObj }) {
  const [preTax, setPreTax] = useState(0);

  // If itemQuantity > 0, show Shopping Cart
  const filtered_products = products.filter((product) => product.amount > 0);

  return (
    <div>
      <h3>
        Shopping Cart
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
      <div className="notification">
        {filtered_products.length > 0 ? (
          <CartTable
            products={filtered_products}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            preTax={preTax}
            setPreTax={setPreTax}
            orderObj = {orderObj}
            setOrderObj = {setOrderObj}
          />
        ) : (
          "No items added to cart yet. Start shopping now!"
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
