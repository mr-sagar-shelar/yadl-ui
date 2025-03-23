import React, { FC } from "react";
import Meditation from "../Meditation";

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
      <Meditation width="500px" height="500px" />
    </div>
  );
};

export default Example;
