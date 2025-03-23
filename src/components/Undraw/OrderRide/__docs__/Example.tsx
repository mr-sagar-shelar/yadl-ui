import React, { FC } from "react";
import OrderRide from "../OrderRide";

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
      <OrderRide width="500px" height="500px" />
    </div>
  );
};

export default Example;
