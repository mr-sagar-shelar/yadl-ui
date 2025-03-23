import React, { FC } from "react";
import WithLove from "../WithLove";

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
      <WithLove width="500px" height="500px" />
    </div>
  );
};

export default Example;
