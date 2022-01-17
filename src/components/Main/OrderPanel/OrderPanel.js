import React, { useState } from "react";
import "./OrderPanel.css";

import risottoImage from "../../../third-party/images/risotto.jpeg";
import beefBarleyImage from "../../../third-party/images/beefBarleySoup.jpeg";
import chickenFriedRiceImage from "../../../third-party/images/chickenFriedRice.jpg";
import chickenNoodlesImage from "../../../third-party/images/chickenNoodles.jpg";
import hamburgerImage from "../../../third-party/images/hamburger.jpg";

import orderCartImage from "../../../third-party/svg/shopping-cart.svg";

const availableFoods = [
  {
    name: "Risotto",
    cost: "$8.40",
    img: risottoImage,
  },
  {
    name: "Beef Barley Image",
    cost: "$12.30",
    img: beefBarleyImage,
  },
  {
    name: "Chicken Fried Rice",
    cost: "$10.70",
    img: chickenFriedRiceImage,
  },
  {
    name: "Hamburger Ultimate",
    cost: "$5.80",
    img: hamburgerImage,
  },
  {
    name: "Chicken Noodles",
    cost: "$4.40",
    img: chickenNoodlesImage,
  },
];

function OrderPanel(props) {
  const [orderList, setOrderList] = useState([]);

  const OrderHandler = (data) => {
    setOrderList(() => {
      return [...orderList, data];
    });
    props.onOrderRecieve([...orderList, data]);
  };

  return (
    <React.Fragment>
      {availableFoods.map((ele, index) => {
        return (
          <div key={index} className="product-ind-display">
            <img className="product-image" alt="product-large" src={ele.img}></img>
            <div className="product-description">
              <h3 className="product-name">{ele.name}</h3>
              <h3 className="product-cost">{ele.cost}</h3>
              <button
                onClick={() => OrderHandler(ele)}
                className="product-order-button"
              >
                <img className="product-order-icon" alt="product-visuals" src={orderCartImage}></img>
              </button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default OrderPanel;

