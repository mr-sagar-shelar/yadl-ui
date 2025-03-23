import React, { FC } from "react";
import AddToCart from "../AddToCart";

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
      <AddToCart width="500px" height="500px" />
    </div>
  );
};

export default Example;
