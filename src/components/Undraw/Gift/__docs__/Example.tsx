import React, { FC } from "react";
import Gift from "../Gift";

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
      <Gift width="500px" height="500px" />
    </div>
  );
};

export default Example;
