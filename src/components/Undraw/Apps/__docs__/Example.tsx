import React, { FC } from "react";
import Apps from "../Apps";

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
      <Apps width="500px" height="500px" />
    </div>
  );
};

export default Example;
