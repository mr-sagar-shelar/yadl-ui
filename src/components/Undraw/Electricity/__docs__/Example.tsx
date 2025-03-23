import React, { FC } from "react";
import Electricity from "../Electricity";

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
      <Electricity width="500px" height="500px" />
    </div>
  );
};

export default Example;
