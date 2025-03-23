import React, { FC } from "react";
import MicDrop from "../MicDrop";

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
      <MicDrop width="500px" height="500px" />
    </div>
  );
};

export default Example;
