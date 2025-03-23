import React, { FC } from "react";
import Knowledge from "../Knowledge";

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
      <Knowledge width="500px" height="500px" />
    </div>
  );
};

export default Example;
