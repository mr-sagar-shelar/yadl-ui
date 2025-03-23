import React, { FC } from "react";
import FixingBugs from "../FixingBugs";

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
      <FixingBugs width="500px" height="500px" />
    </div>
  );
};

export default Example;
