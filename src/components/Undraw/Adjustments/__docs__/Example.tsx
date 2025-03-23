import React, { FC } from "react";
import Adjustments from "../Adjustments";

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
      <Adjustments width="500px" height="500px" />
    </div>
  );
};

export default Example;
