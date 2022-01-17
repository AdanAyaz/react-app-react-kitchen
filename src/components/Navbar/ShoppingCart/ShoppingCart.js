import React from "react";
import "./ShoppingCart.css";
import shoppingCartIcon from "../../../third-party/svg/shopping-cart.svg";
import CartPanel from "./CartPanel/CartPanel";

function ShoppingCart(props) {
  const panelOpenHandler = () => {
    document.getElementById("cart-panel").classList.remove("hidden");
  };

  return (
    <React.Fragment>
      <img
        src={shoppingCartIcon}
        alt="shopping-cart-icon"
        onClick={panelOpenHandler}
        className="shopping-cart-icon"
      ></img>
      <CartPanel onDataCoined01={props.onDataCoined00}>
        {props.children}
      </CartPanel>
    </React.Fragment>
  );
}

export default ShoppingCart;
