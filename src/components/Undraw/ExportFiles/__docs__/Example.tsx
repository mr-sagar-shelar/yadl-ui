import React, { FC } from "react";
import ExportFiles from "../ExportFiles";

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
      <ExportFiles width="500px" height="500px" />
    </div>
  );
};

export default Example;
