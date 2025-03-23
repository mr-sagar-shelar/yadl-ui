import React, { FC } from "react";
import DoneChecking from "../DoneChecking";

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
      <DoneChecking width="500px" height="500px" />
    </div>
  );
};

export default Example;
