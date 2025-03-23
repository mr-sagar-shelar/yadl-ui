import React, { FC } from "react";
import Aircraft from "../Aircraft";

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
      <Aircraft width="500px" height="500px" />
    </div>
  );
};

export default Example;
