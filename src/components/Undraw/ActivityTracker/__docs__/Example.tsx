import React, { FC } from "react";
import ActivityTracker from "../ActivityTracker";

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
      <ActivityTracker width="500px" height="500px" />
    </div>
  );
};

export default Example;
