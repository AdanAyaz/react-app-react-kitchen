import React from "react";
import "./Main.css";
import OrderPanel from "./OrderPanel/OrderPanel";

function Main(props) {
  function orderRecieveHandler(ele) {
    props.onOrderDataRecieve(ele);
  }

  return (
    <div className="main-display">
      <OrderPanel onOrderRecieve={orderRecieveHandler} />
    </div>
  );
}

export default Main;
