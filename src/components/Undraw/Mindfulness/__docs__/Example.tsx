import React, { FC } from "react";
import Mindfulness from "../Mindfulness";

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
      <Mindfulness width="500px" height="500px" />
    </div>
  );
};

export default Example;
