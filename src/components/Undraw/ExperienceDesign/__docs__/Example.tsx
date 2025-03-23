import React, { FC } from "react";
import ExperienceDesign from "../ExperienceDesign";

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
      <ExperienceDesign width="500px" height="500px" />
    </div>
  );
};

export default Example;
