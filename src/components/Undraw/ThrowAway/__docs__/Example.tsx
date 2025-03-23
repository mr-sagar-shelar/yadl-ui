import React, { FC } from "react";
import ThrowAway from "../ThrowAway";

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
      <ThrowAway width="500px" height="500px" />
    </div>
  );
};

export default Example;
