import React, { FC } from "react";
import DevFocus from "../DevFocus";

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
      <DevFocus width="500px" height="500px" />
    </div>
  );
};

export default Example;
