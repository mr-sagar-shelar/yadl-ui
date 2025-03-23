import React, { FC } from "react";
import FilesSent from "../FilesSent";

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
      <FilesSent width="500px" height="500px" />
    </div>
  );
};

export default Example;
