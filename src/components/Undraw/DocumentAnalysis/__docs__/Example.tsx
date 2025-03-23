import React, { FC } from "react";
import DocumentAnalysis from "../DocumentAnalysis";

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
      <DocumentAnalysis width="500px" height="500px" />
    </div>
  );
};

export default Example;
