import React from "react";
import PurchaseCard from "../PurchaseCard/PurchaseCard";
import "./CheckoutReceipt.css";

function CheckoutReceipt({
  products,
  filtered_products,
  formOneValue,
  formTwoValue,
  subtotal,
  setProducts,
}) {
  var USDformatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="card">
      <div className="card-head">
        <h4>Receipt</h4>
      </div>
      <div className="card-body">
        <p>
          Showing receipt for {formOneValue} available at {formTwoValue}:
        </p>
        <ul className="purchase">
          {filtered_products.map((product) => {
            return (
              <PurchaseCard
                amount={product.amount}
                name={product.name}
                price={product.price}
              />
            );
          })}
          <li>
            Before taxes, the subtotal was {USDformatter.format(subtotal)}
          </li>
          <li>
            After taxes and fees were applied, the total comes out to{" "}
            {USDformatter.format(subtotal * 1.0725)}
          </li>
        </ul>
      </div>
      <footer className="card-foot">
        <button className="button">Shop More</button>
        <button className="button">Exit</button>
      </footer>
    </div>
  );
}

export default CheckoutReceipt;
