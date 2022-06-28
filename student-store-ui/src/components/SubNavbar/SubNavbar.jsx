import * as React from "react";
import "./SubNavbar.css";
import { useState } from "react";

export default function SubNavbar({ search, setSearch, setCategory }) {
  const [active, setActive] = useState("1");

  const handleClick = (event) => {
    setCategory(event.target.name);
    setActive(event.target.id);
  };

  function handleOnChange(event){
    setSearch(event.target.value)
  }
  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={search}
              onChange={handleOnChange}
            />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>Help
            </span>
            <div className="cart">
              <a href="/">
                My Cart<i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="category-menu">
            <li className={active === "1" ? "active" : ""}>
              <button onClick={handleClick} id={"1"} name="">
                All Categories
              </button>
            </li>
            <li className={active === "2" ? "active" : ""}>
              <button onClick={handleClick} id={"2"} name="clothing">
                Clothing
              </button>
            </li>
            <li className={active === "3" ? "active" : ""}>
              <button onClick={handleClick} id={"3"} name="food">
                Food
              </button>
            </li>
            <li className={active === "4" ? "active" : ""}>
              <button onClick={handleClick} id={"4"} name="accessories">
                Accessories
              </button>
            </li>
            <li className={active === "5" ? "active" : ""}>
              <button onClick={handleClick} id={"5"} name="tech">
                Tech
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
