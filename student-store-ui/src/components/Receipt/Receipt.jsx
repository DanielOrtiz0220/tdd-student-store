import React from "react";
import "./Receipt.css";

function Receipt({ subtotal }) {
  var USDformatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const taxes = subtotal * 0.0725;
  return (
    <div className="receipt">
      <div className="receipt-subtotal">
        <span className="label">Subtotal</span>
        <span></span>
        <span></span>
        <span className="center subtotal">{USDformatter.format(subtotal)}</span>
      </div>
      <div className="receipt-taxes">
        <span className="label">Taxes and Fees</span>
        <span></span>
        <span></span>
        <span className="center">{USDformatter.format(taxes)}</span>
      </div>
      <div className="receipt-total">
        <span className="label">Total</span>
        <span></span>
        <span></span>
        <span className="center total-price">
          {USDformatter.format(taxes + subtotal)}
        </span>
      </div>
    </div>
  );
}

export default Receipt;
