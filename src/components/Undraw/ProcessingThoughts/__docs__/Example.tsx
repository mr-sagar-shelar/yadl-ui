import React, { FC } from "react";
import ProcessingThoughts from "../ProcessingThoughts";

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
      <ProcessingThoughts width="500px" height="500px" />
    </div>
  );
};

export default Example;
