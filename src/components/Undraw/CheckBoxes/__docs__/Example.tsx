import React, { FC } from "react";
import CheckBoxes from "../CheckBoxes";

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
      <CheckBoxes width="500px" height="500px" />
    </div>
  );
};

export default Example;
