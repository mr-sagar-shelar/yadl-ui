import React, { FC } from "react";
import Contract from "../Contract";

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
      <Contract width="500px" height="500px" />
    </div>
  );
};

export default Example;
