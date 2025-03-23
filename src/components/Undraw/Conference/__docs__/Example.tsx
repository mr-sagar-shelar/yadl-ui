import React, { FC } from "react";
import Conference from "../Conference";

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
      <Conference width="500px" height="500px" />
    </div>
  );
};

export default Example;
