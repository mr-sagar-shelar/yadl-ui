import React, { FC } from "react";
import CreditCard from "../CreditCard";

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
      <CreditCard width="500px" height="500px" />
    </div>
  );
};

export default Example;
