import React, { FC } from "react";
import StockPrices from "../StockPrices";

const Example = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <StockPrices width="500px" height="500px" />
    </div>
  );
};

export default Example;
