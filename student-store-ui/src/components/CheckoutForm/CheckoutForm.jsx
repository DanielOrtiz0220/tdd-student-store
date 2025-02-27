import React, { useEffect } from "react";
import { useState } from "react";
function CheckoutForm({
  setCheckedOut,
  setFormOneValue,
  setFormTwoValue,
  formOneValue,
  formTwoValue,
  orderObj,
  setOrderObj
}) {
  const [checkboxChecked, setCheckboxchecked] = useState(false);
  const [checkoutButtonPressed, setCheckoutButtonPressed] = useState(false);
    
    

  //Every time form one or form two update, it checks if both are filled out. If they are, then you can check out. Otherwise, you cannot.
  useEffect(async () => {
    if (
      formOneValue.length > 0 &&
      formTwoValue.length > 0 &&
      checkboxChecked &&
      checkoutButtonPressed
    ) {
      // setOrderObj({user:{name: formOneValue, email: formTwoValue}, total:subtot})

      // axios
      //   .post(`/store/receipt/3`)
      //   .then((response) => {
      //     // handle success
      //     response.data.products.forEach((product) => {
      //       product.amount = 0;
      //     });
      //     let productData = response.data.products;
      //     setProducts(productData); //Setting the products object to API products.
      //   })
      //   .catch((error) => {
      //     // handle error
      //     error;
      //   });

      setCheckedOut(true);
      ("ALL TRUE");
    } else {
      setCheckedOut(false);
      ("ALL FALSE");
    }
  }, [checkoutButtonPressed]);

  return (
    <div>
      <div className="checkout-form">
        <h3>
          Payment Info
          <span className="button">
            <i className="material-icons md-48">monetization_on</i>
          </span>
        </h3>
        <div className="input-field">
          <label className="label">Name</label>
          <div className="control ">
            <input
              name="name"
              className="checkout-form-input"
              type="text"
              placeholder="Student Name"
              defaultValue=""
              onChange={(e) => setFormOneValue(e.target.value)}
            />
          </div>
        </div>
        <div className="input-field">
          <label className="label">Email</label>
          <div className="control">
            <input
              name="email"
              className="checkout-form-input"
              type="email"
              placeholder="student@codepath.org"
              defaultValue=""
              onChange={(e) => setFormTwoValue(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="termsAndConditions"
                type="checkbox"
                onChange={(e) => setCheckboxchecked((current) => !current)}
              />
              <span className="label">
                I agree to the{" "}
                <a href="#terms-and-conditions">terms and conditions</a>
              </span>
            </label>
          </div>
        </div>
        <p className="is-danger"></p>
        <div className="field">
          <div className="control">
            <button
              className="button checkout-button"
              onClick={() => setCheckoutButtonPressed(true)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
