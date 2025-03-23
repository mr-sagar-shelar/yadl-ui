import React, { FC } from "react";
import Design from "../Design";

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
      <Design width="500px" height="500px" />
    </div>
  );
};

export default Example;
