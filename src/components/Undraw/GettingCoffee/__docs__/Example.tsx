import React, { FC } from "react";
import GettingCoffee from "../GettingCoffee";

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
      <GettingCoffee width="500px" height="500px" />
    </div>
  );
};

export default Example;
