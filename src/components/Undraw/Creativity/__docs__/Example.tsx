import React, { FC } from "react";
import Creativity from "../Creativity";

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
      <Creativity width="500px" height="500px" />
    </div>
  );
};

export default Example;
