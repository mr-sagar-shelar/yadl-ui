import React, { FC } from "react";
import JobHunt from "../JobHunt";

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
      <JobHunt width="500px" height="500px" />
    </div>
  );
};

export default Example;
