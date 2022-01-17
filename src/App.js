import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import orderContext from "./store/order-context-";
import { useState } from "react";

function App() {
  let [currentOrderData, setCurrentOrderData] = useState([]);

  function dataRecieveHandler00(ele) {
    setCurrentOrderData(ele);
  }

  return (
    <div>
      <Navbar onDataCoined={currentOrderData}></Navbar>
      <Main onOrderDataRecieve={dataRecieveHandler00}></Main>
    </div>
  );
}

export default App;
