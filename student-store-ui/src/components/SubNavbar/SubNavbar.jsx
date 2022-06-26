import * as React from "react";
import "./SubNavbar.css";

export default function SubNavbar() {
  return (
    <nav class="sub-navbar">
      <div class="content">
        <div class="row">
          <div class="search-bar">
            <input type="text" name="search" placeholder="Search" value="" />
            <i class="material-icons">search</i>
          </div>
          <div class="links">
            <span class="help">
              <i class="material-icons">help</i>Help
            </span>
            <div class="cart">
              <a href="/">
                My Cart<i class="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <ul class="category-menu open">
            <li class="is-active">
              <button>All Categories</button>
            </li>
            <li class="">
              <button>Clothing</button>
            </li>
            <li class="">
              <button>Food</button>
            </li>
            <li class="">
              <button>Accessories</button>
            </li>
            <li class="">
              <button>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
