import React, { FC } from "react";
import VideoGameNight from "../VideoGameNight";

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
      <VideoGameNight width="500px" height="500px" />
    </div>
  );
};

export default Example;
