import React, { FC } from "react";
import LiveCollaboration from "../LiveCollaboration";

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
      <LiveCollaboration width="500px" height="500px" />
    </div>
  );
};

export default Example;
