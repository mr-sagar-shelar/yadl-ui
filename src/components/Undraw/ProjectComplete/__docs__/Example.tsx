import React, { FC } from "react";
import ProjectComplete from "../ProjectComplete";

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
      <ProjectComplete width="500px" height="500px" />
    </div>
  );
};

export default Example;
