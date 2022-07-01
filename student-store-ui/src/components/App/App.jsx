import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [orderObj, setOrderObj] = useState({
    orderId: 3,
    user: {
      name: "",
      email: "",
    },
    shoppingCart: [],
    total: 0,
    createdAt: 0, // (format : "12:10:00 PST")
  });

  // const orderObj = {
  //   "orderId": 3,
  //   "user": {
  //   "name": "",
  //   "email": ""
  //   },
  //   "shoppingCart": [],
  //   "total": 0,
  //   "createdAt": 0  // (format : "12:10:00 PST")
  //   }

  const filtered_products = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search) &&
      product.category.includes(category) // review this
    );
  });

  function getProductDetails() {
    axios
      .get("http://localhost:3001/store")
      .then((response) => {
        // handle success
        response.data.products.forEach((product) => {
          product.amount = 0;
        });
        let productData = response.data.products;
        setProducts(productData); //Setting the products object to API products.
      })
      .catch((error) => {
        // handle error
        error;
      });
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  function addAmountOfProduct(id) {
    let newProducts = [...products];
    newProducts[id - 1].amount += 1;
    setProducts(newProducts);
  }

  function subAmountOfProduct(id) {
    let newProducts = [...products];
    newProducts[id - 1].amount -= 1;
    setProducts(newProducts);
  }

  return (
    <div className="app">
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={filtered_products}
                  setProducts={setProducts}
                  search={search}
                  setSearch={setSearch}
                  subtotal={subtotal}
                  setSubtotal={setSubtotal}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  addAmountOfProduct={addAmountOfProduct}
                  subAmountOfProduct={subAmountOfProduct}
                  setCategory={setCategory}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  orderObj={orderObj}
                  setOrderObj={setOrderObj}
                />
              }
            />
            <Route
              path="/contactus"
              element={<ContactUs isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="/aboutus"
              element={<AboutUs isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products}
                  setProducts={setProducts}
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
