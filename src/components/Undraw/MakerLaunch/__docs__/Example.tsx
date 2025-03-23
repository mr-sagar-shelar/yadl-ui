import React, { FC } from "react";
import MakerLaunch from "../MakerLaunch";

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
      <MakerLaunch width="500px" height="500px" />
    </div>
  );
};

export default Example;
