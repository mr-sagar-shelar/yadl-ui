import React, { FC } from "react";
import Family from "../Family";

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
      <Family width="500px" height="500px" />
    </div>
  );
};

export default Example;
