import React, { FC } from "react";
import LateAtNight from "../LateAtNight";

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
      <LateAtNight width="500px" height="500px" />
    </div>
  );
};

export default Example;
