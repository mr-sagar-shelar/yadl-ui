import React, { FC } from "react";
import InRealLife from "../InRealLife";

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
      <InRealLife width="500px" height="500px" />
    </div>
  );
};

export default Example;
