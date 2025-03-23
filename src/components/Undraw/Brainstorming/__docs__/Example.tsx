import React, { FC } from "react";
import Brainstorming from "../Brainstorming";

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
      <Brainstorming width="500px" height="500px" />
    </div>
  );
};

export default Example;
