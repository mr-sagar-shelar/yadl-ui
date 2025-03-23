import React, { FC } from "react";
import VideoTutorial from "../VideoTutorial";

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
      <VideoTutorial width="500px" height="500px" />
    </div>
  );
};

export default Example;
