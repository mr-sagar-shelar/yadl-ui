import React, { FC } from "react";
import MyPersonalFiles from "../MyPersonalFiles";

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
      <MyPersonalFiles width="500px" height="500px" />
    </div>
  );
};

export default Example;
