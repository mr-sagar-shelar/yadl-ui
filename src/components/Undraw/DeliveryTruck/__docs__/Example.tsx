import React, { FC } from "react";
import DeliveryTruck from "../DeliveryTruck";

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
      <DeliveryTruck width="500px" height="500px" />
    </div>
  );
};

export default Example;
