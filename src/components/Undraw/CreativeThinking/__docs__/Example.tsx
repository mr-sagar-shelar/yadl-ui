import React, { FC } from "react";
import CreativeThinking from "../CreativeThinking";

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
      <CreativeThinking width="500px" height="500px" />
    </div>
  );
};

export default Example;
