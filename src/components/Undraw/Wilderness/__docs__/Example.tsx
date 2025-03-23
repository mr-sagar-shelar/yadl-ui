import React, { FC } from "react";
import Wilderness from "../Wilderness";

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
      <Wilderness width="500px" height="500px" />
    </div>
  );
};

export default Example;
