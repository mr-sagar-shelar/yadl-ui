import React, { FC } from "react";
import AnonymousFeedback from "../AnonymousFeedback";

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
      <AnonymousFeedback width="500px" height="500px" />
    </div>
  );
};

export default Example;
