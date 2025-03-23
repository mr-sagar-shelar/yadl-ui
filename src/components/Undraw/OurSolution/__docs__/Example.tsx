import React, { FC } from "react";
import OurSolution from "../OurSolution";

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
      <OurSolution width="500px" height="500px" />
    </div>
  );
};

export default Example;
