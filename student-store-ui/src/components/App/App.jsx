import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import { useState } from "react"



import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  const [products, setProducts] = useState([0])
  const [isFetching, setIsFetching] = useState(0)
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(0)
  const [shoppingCart, setShoppingCart] = useState(null)
  const [checkoutForm, setCheckoutForm] = useState(null)


  return (
    <div className="app">
        <main>
          
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>

          
        </main>
      
    </div>
  )
}
