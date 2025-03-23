import React, { FC } from "react";
import Savings from "../Savings";

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
      <Savings width="500px" height="500px" />
    </div>
  );
};

export default Example;
