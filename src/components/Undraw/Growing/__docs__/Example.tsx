import React, { FC } from "react";
import Growing from "../Growing";

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
      <Growing width="500px" height="500px" />
    </div>
  );
};

export default Example;
