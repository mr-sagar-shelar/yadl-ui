import React, { FC } from "react";
import Letter from "../Letter";

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
      <Letter width="500px" height="500px" />
    </div>
  );
};

export default Example;
