import React, { FC } from "react";
import LovingStory from "../LovingStory";

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
      <LovingStory width="500px" height="500px" />
    </div>
  );
};

export default Example;
