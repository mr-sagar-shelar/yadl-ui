import React, { FC } from "react";
import FocusFocus from "../FocusFocus";

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
      <FocusFocus width="500px" height="500px" />
    </div>
  );
};

export default Example;
