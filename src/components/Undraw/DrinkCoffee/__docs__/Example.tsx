import React, { FC } from "react";
import DrinkCoffee from "../DrinkCoffee";

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
      <DrinkCoffee width="500px" height="500px" />
    </div>
  );
};

export default Example;
