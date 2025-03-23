import React, { FC } from "react";
import Science from "../Science";

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
      <Science width="500px" height="500px" />
    </div>
  );
};

export default Example;
