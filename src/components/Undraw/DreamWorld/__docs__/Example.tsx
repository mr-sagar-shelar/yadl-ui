import React, { FC } from "react";
import DreamWorld from "../DreamWorld";

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
      <DreamWorld width="500px" height="500px" />
    </div>
  );
};

export default Example;
