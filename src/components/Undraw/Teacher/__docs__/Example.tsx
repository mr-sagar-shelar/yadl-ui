import React, { FC } from "react";
import Teacher from "../Teacher";

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
      <Teacher width="500px" height="500px" />
    </div>
  );
};

export default Example;
