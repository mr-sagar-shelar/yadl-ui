import React, { FC } from "react";
import Experts from "../Experts";

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
      <Experts width="500px" height="500px" />
    </div>
  );
};

export default Example;
