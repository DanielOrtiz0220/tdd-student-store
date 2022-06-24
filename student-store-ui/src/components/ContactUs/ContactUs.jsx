import * as React from "react";
import "./ContactUs.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function ContactUs({isOpen, setIsOpen }) {
  return (
    <div className="contact-us">
      <Navbar />
      <Sidebar isOpen = {isOpen} setIsOpen={setIsOpen}/>
      <p>1 (800) 667-6389</p>
    </div>
  );
}
