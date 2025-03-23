import React, { FC } from "react";
import PizzaSharingPizzaSharing from "../PizzaSharingPizzaSharing";

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
      <PizzaSharingPizzaSharing width="500px" height="500px" />
    </div>
  );
};

export default Example;
