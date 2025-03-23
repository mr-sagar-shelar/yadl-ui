import React, { FC } from "react";
import AudioPlayer from "../AudioPlayer";

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
      <AudioPlayer width="500px" height="500px" />
    </div>
  );
};

export default Example;
