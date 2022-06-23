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

export default function App() {
  const [products, setProducts] = useState([0]);
  const [isFetching, setIsFetching] = useState(0);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(0);
  const [shoppingCart, setShoppingCart] = useState(null);
  const [checkoutForm, setCheckoutForm] = useState(null);

  useEffect(() => {
    console.log("before api");
    axios.get("https://codepath-store-api.herokuapp.com/store").then((res) => {
      setProducts(res.data.products);
    });
    console.log(products);
  }, []);

  /* Use this when I want to add a product to the cart (maybe)*/
  // useEffect(() => {
  //   console.log("before api");
  //   axios.get("https://codepath-store-api.herokuapp.com/store")
  //     .then(res => {
  //       setProducts(res.data)
  //     })
  //   console.log("after api " + products);
  // }, [])

  return (
    <div className="app">
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home products={products} setProducts={setProducts} />}
            />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
