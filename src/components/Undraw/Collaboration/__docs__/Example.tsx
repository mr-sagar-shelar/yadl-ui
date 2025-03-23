import React, { FC } from "react";
import Collaboration from "../Collaboration";

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
      <Collaboration width="500px" height="500px" />
    </div>
  );
};

export default Example;
