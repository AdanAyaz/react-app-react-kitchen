import React from "react";

const orderContext = React.createContext({
  name: "Test Food",
  cost: "$XX.XX",
  imageUrl: "testUrl",
});

export default orderContext;
