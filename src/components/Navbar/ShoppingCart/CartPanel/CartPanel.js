import React, { useRef } from "react";
import "./CartPanel.css";
import closeIcon from "../../../../third-party/svg/close-icon.svg";

function CartPanel(props) {
  const panelRef = useRef(null);

  const panelCloseHandler = () => {
    panelRef.current.classList.add("hidden");
  };

  return (
    <div
      ref={panelRef}
      className="shopping-cart-panel"
      id="cart-panel"
      onClick={panelCloseHandler}
    >
      <button className="shopping-cart-panel-close">
        <img alt="close-icon" src={closeIcon} />
      </button>
      {props.onDataCoined01.map((ele) => {
        console.log(ele);
        return (
          <div className="shopping-cart-item">
            <div className="shopping-cart-item-details">
              <h2>{ele.name}</h2>
              <h3>{ele.cost}</h3>
            </div>
            <div className="shopping-cart-item-image-container">
              <img className="shopping-cart-item-image" alt="order-image" src={ele.img}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartPanel;
