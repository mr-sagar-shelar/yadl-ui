import React, { FC } from "react";
import Fast from "../Fast";

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
      <Fast width="500px" height="500px" />
    </div>
  );
};

export default Example;
