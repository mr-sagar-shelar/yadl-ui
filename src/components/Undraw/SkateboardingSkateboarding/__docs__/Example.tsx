import React, { FC } from "react";
import SkateboardingSkateboarding from "../SkateboardingSkateboarding";

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
      <SkateboardingSkateboarding width="500px" height="500px" />
    </div>
  );
};

export default Example;
