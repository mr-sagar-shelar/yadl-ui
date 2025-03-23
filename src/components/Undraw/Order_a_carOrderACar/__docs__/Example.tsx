import React, { FC } from "react";
import Order_a_carOrderACar from "../Order_a_carOrderACar";

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
      <Order_a_carOrderACar width="500px" height="500px" />
    </div>
  );
};

export default Example;
