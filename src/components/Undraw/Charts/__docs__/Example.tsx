import React, { FC } from "react";
import Charts from "../Charts";

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
      <Charts width="500px" height="500px" />
    </div>
  );
};

export default Example;
