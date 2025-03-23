import React, { FC } from "react";
import Typewriter from "../Typewriter";

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
      <Typewriter width="500px" height="500px" />
    </div>
  );
};

export default Example;
