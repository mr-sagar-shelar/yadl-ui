import React, { FC } from "react";
import FileManager from "../FileManager";

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
      <FileManager width="500px" height="500px" />
    </div>
  );
};

export default Example;
