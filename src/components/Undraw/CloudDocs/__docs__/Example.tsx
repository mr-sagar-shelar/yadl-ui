import React, { FC } from "react";
import CloudDocs from "../CloudDocs";

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
      <CloudDocs width="500px" height="500px" />
    </div>
  );
};

export default Example;
