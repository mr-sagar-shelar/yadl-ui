import React, { FC } from "react";
import LandscapeMode from "../LandscapeMode";

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
      <LandscapeMode width="500px" height="500px" />
    </div>
  );
};

export default Example;
