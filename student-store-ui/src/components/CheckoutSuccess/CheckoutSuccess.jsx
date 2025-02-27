import React from "react";
import CheckoutReceipt from "../CheckoutReceipt/CheckoutReceipt";

function CheckoutSuccess({
  products,
  setProducts,
  filtered_products,
  checkedOut,
  formOneValue,
  formTwoValue,
  subtotal,
}) {
  return (
    <div>
      <div className="checkout-success">
        <h3>
          Checkout Info{" "}
          <span className="icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="content">
          <p>
            {checkedOut ? (
              <CheckoutReceipt
                filtered_products={filtered_products}
                formOneValue={formOneValue}
                formTwoValue={formTwoValue}
                subtotal={subtotal}
                setProducts={setProducts}
                products={products}
              />
            ) : (
              "A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room."
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
