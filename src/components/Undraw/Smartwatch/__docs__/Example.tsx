import React, { FC } from "react";
import Smartwatch from "../Smartwatch";

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
      <Smartwatch width="500px" height="500px" />
    </div>
  );
};

export default Example;
