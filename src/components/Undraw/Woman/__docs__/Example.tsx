import React, { FC } from "react";
import Woman from "../Woman";

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
      <Woman width="500px" height="500px" />
    </div>
  );
};

export default Example;
