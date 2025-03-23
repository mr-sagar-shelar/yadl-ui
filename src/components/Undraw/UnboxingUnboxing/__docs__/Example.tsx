import React, { FC } from "react";
import UnboxingUnboxing from "../UnboxingUnboxing";

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
      <UnboxingUnboxing width="500px" height="500px" />
    </div>
  );
};

export default Example;
