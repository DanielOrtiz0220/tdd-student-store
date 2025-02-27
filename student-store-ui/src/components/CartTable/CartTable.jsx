import React, { useState, useEffect } from "react";
import ProductRow from "../ProductRow/ProductRow";
import Receipt from "../Receipt/Receipt";
import "./CartTable.css";

function CartTable({ products, subtotal, setSubtotal, orderObj, setOrderObj }) {
  // useEffect(() => {
  //   (subtotal);
  // }, [subtotal]);

  return (
    <div className="CartTable">
      <div className="header">
        <div className="header-row">
          <span className="flex-2">Name</span>
          <span className="center">Quantity</span>
          <span className="center">Unit Price</span>
          <span className="center">Cost</span>
        </div>
        {products.map((product, idx) => {
          // setOrderObj({shoppingCart:[...{id: product.id, amount: product.amount}]})
          return (
            <ProductRow
              key={idx}
              name={product.name}
              amount={product.amount}
              price={product.price}
            />
          );
        })}
        <Receipt subtotal={subtotal} />
      </div>
    </div>
  );
}

export default CartTable;
