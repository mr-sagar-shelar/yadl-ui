import React, { FC } from "react";
import BugFixingBugFixing from "../BugFixingBugFixing";

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
      <BugFixingBugFixing width="500px" height="500px" />
    </div>
  );
};

export default Example;
