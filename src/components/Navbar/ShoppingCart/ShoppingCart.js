import React from "react";
import "./ShoppingCart.css";
import shoppingCartIcon from "../../../third-party/svg/shopping-cart.svg";
import CartPanel from "./CartPanel/CartPanel";
import orderContext from "../../../store/order-context-";

function ShoppingCart() {
  const cartPanel = document.getElementById("cart-panel");

  const panelOpenHandler = () => {
    cartPanel.closest("#cart-panel").classList.remove("hidden");
  };

  return (
    <React.Fragment>
      <img
        src={shoppingCartIcon}
        onClick={panelOpenHandler}
        className="shopping-cart-icon"
      ></img>
      <CartPanel />
    </React.Fragment>
  );
}

export default ShoppingCart;
