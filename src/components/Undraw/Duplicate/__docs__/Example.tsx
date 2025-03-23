import React, { FC } from "react";
import Duplicate from "../Duplicate";

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
      <Duplicate width="500px" height="500px" />
    </div>
  );
};

export default Example;
