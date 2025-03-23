import React, { FC } from "react";
import RefreshingBeverage from "../RefreshingBeverage";

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
      <RefreshingBeverage width="500px" height="500px" />
    </div>
  );
};

export default Example;
