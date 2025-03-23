import React, { FC } from "react";
import SpreadLove from "../SpreadLove";

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
      <SpreadLove width="500px" height="500px" />
    </div>
  );
};

export default Example;
