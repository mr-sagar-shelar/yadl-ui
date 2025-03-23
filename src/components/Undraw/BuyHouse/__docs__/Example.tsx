import React, { FC } from "react";
import BuyHouse from "../BuyHouse";

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
      <BuyHouse width="500px" height="500px" />
    </div>
  );
};

export default Example;
