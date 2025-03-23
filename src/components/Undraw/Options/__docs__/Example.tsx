import React, { FC } from "react";
import Options from "../Options";

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
      <Options width="500px" height="500px" />
    </div>
  );
};

export default Example;
