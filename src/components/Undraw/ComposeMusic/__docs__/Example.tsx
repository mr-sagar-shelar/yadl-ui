import React, { FC } from "react";
import ComposeMusic from "../ComposeMusic";

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
      <ComposeMusic width="500px" height="500px" />
    </div>
  );
};

export default Example;
