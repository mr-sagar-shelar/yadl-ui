import React, { FC } from "react";
import CompletionProgress from "../CompletionProgress";

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
      <CompletionProgress width="500px" height="500px" />
    </div>
  );
};

export default Example;
