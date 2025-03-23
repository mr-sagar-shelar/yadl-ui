import React, { FC } from "react";
import YoutubeTutorial from "../YoutubeTutorial";

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
      <YoutubeTutorial width="500px" height="500px" />
    </div>
  );
};

export default Example;
