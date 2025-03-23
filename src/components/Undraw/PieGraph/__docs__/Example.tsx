import React, { FC } from "react";
import PieGraph from "../PieGraph";

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
      <PieGraph width="500px" height="500px" />
    </div>
  );
};

export default Example;
