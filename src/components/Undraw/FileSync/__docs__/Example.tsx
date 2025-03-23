import React, { FC } from "react";
import FileSync from "../FileSync";

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
      <FileSync width="500px" height="500px" />
    </div>
  );
};

export default Example;
