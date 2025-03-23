import React, { FC } from "react";
import OnlineLearning from "../OnlineLearning";

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
      <OnlineLearning width="500px" height="500px" />
    </div>
  );
};

export default Example;
