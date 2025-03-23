import React, { FC } from "react";
import Target from "../Target";

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
      <Target width="500px" height="500px" />
    </div>
  );
};

export default Example;
