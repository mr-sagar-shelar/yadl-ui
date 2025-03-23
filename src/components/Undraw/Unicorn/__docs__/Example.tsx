import React, { FC } from "react";
import Unicorn from "../Unicorn";

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
      <Unicorn width="500px" height="500px" />
    </div>
  );
};

export default Example;
