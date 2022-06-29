import React from "react";
import "./Receipt.css";

function Receipt({ subtotal }) {
  var USDformatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const taxes = subtotal * 0.0725;
  return (
    <div class="receipt">
      <div class="receipt-subtotal">
        <span class="label">Subtotal</span>
        <span></span>
        <span></span>
        <span class="center subtotal">{USDformatter.format(subtotal)}</span>
      </div>
      <div class="receipt-taxes">
        <span class="label">Taxes and Fees</span>
        <span></span>
        <span></span>
        <span class="center">{USDformatter.format(taxes)}</span>
      </div>
      <div class="receipt-total">
        <span class="label">Total</span>
        <span></span>
        <span></span>
        <span class="center total-price">
          {USDformatter.format(taxes + subtotal)}
        </span>
      </div>
    </div>
  );
}

export default Receipt;
