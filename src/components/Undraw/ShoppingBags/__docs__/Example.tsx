import React, { FC } from "react";
import ShoppingBags from "../ShoppingBags";

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
      <ShoppingBags width="500px" height="500px" />
    </div>
  );
};

export default Example;
