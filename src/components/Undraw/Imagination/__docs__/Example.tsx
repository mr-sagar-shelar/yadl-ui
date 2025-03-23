import React, { FC } from "react";
import Imagination from "../Imagination";

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
      <Imagination width="500px" height="500px" />
    </div>
  );
};

export default Example;
