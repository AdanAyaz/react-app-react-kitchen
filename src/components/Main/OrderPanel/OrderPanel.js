import React, { useState } from "react";
import ReactDOM from "react-dom";
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

function OrderPanel() {
  const OrderHandler = () => {
    console.log();
  };

  return (
    <React.Fragment>
      {availableFoods.map((ele) => {
        return (
          <div className="product-ind-display">
            <img className="product-image" src={ele.img}></img>
            <div className="product-description">
              <h3 className="product-name">{ele.name}</h3>
              <h3 className="product-cost">{ele.cost}</h3>
              <button onClick={OrderHandler} className="product-order-button">
                <img className="product-order-icon" src={orderCartImage}></img>
              </button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default OrderPanel;

//////////////////////////

// const [foodState, setFoodState] = useState([]);
// // AN API CALL ON A BUTTON CREATED FOR NO FRICKING REASON - Time waste

// const foodOrdering = async () => {
//   let menuContent = await fetch(
//     "http://openlibrary.org/search.json?q=harry%20potter&fields=*,availability&limit=1"
//   );
//   if (!menuContent.ok) {
//     return console.log("An error has occurred. Sorry for the inconvenience.");
//   }
//   let data = menuContent.json();
//   data = data.then((data) => {
//     console.log(data.docs[0]);
//     setFoodState([data.docs[0], ...foodState]);
//   });

{
  /* <button className="request-data-button" onClick={foodOrdering}>
        Request Data
      </button>
      {foodState.map((ele) => {
        return (
          <div className="product-ind-display">
            <p style={{ display: "inline" }}>{ele.title_suggest}</p>
          </div>
        );
      })} */
}
