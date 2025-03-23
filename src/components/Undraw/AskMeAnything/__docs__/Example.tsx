import React, { FC } from "react";
import AskMeAnything from "../AskMeAnything";

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
      <AskMeAnything width="500px" height="500px" />
    </div>
  );
};

export default Example;
