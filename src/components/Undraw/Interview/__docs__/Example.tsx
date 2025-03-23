import React, { FC } from "react";
import Interview from "../Interview";

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
      <Interview width="500px" height="500px" />
    </div>
  );
};

export default Example;
