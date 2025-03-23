import React, { FC } from "react";
import Connection from "../Connection";

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
      <Connection width="500px" height="500px" />
    </div>
  );
};

export default Example;
