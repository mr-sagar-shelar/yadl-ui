import React, { FC } from "react";
import Decide from "../Decide";

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
      <Decide width="500px" height="500px" />
    </div>
  );
};

export default Example;
