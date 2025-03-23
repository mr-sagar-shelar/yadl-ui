import React, { FC } from "react";
import WorkChat from "../WorkChat";

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
      <WorkChat width="500px" height="500px" />
    </div>
  );
};

export default Example;
