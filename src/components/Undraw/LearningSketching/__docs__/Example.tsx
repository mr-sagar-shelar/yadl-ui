import React, { FC } from "react";
import LearningSketching from "../LearningSketching";

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
      <LearningSketching width="500px" height="500px" />
    </div>
  );
};

export default Example;
