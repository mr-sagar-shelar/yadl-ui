import React, { FC } from "react";
import Wash_handsWashHands from "../Wash_handsWashHands";

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
      <Wash_handsWashHands width="500px" height="500px" />
    </div>
  );
};

export default Example;
