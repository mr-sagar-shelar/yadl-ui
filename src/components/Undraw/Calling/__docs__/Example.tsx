import React, { FC } from "react";
import Calling from "../Calling";

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
      <Calling width="500px" height="500px" />
    </div>
  );
};

export default Example;
