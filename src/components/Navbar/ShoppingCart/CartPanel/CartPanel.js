import React, { useRef, useContext } from "react";
import "./CartPanel.css";
import closeIcon from "../../../../third-party/svg/close-icon.svg";
import orderContext from "../../../../store/order-context-";

function CartPanel() {
  const panelRef = useRef(null);

  const data = useContext(orderContext);

  const panelCloseHandler = () => {
    panelRef.current.classList.add("hidden");
    console.log(data);
  };

  return (
    <div
      ref={panelRef}
      className="shopping-cart-panel"
      id="cart-panel"
      onClick={panelCloseHandler}
    >
      <button className="shopping-cart-panel-close">
        <img src={closeIcon} />
      </button>
      <div className="shopping-cart-item">
        <div className="shopping-cart-item-details">
          <h2>Test Food</h2>
          <h3>$XX.XX</h3>
          <h3>Quantity: 0</h3>
        </div>
        <div className="shopping-cart-item-image">Image Placeholder</div>
      </div>
    </div>
  );
}

export default CartPanel;
