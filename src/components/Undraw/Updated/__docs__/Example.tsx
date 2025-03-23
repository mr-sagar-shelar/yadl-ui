import React, { FC } from "react";
import Updated from "../Updated";

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
      <Updated width="500px" height="500px" />
    </div>
  );
};

export default Example;
