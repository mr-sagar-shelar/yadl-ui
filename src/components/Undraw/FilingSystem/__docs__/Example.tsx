import React, { FC } from "react";
import FilingSystem from "../FilingSystem";

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
      <FilingSystem width="500px" height="500px" />
    </div>
  );
};

export default Example;
