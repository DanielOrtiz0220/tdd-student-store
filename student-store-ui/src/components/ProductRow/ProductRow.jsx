import React, { useEffect, useState } from "react";
import "./ProductRow.css";

function ProductRow({ name, amount, price,}) {
  var USDformatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let cost = price * amount;

  return (
    <div className="product-row">
      <span className="flex-2 cart-product-name">{name}</span>
      <span className="center cart-product-quantity">{amount}</span>
      <span className="center cart-product-price">
        {USDformatter.format(price)}
      </span>
      <span className="center cart-product-subtotal">
        {USDformatter.format(cost)}
      </span>
    </div>
  );
}

export default ProductRow;
