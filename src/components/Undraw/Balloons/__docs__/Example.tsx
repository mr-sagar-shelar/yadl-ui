import React, { FC } from "react";
import Balloons from "../Balloons";

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
      <Balloons width="500px" height="500px" />
    </div>
  );
};

export default Example;
