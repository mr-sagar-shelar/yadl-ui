import React, { FC } from "react";
import VideoUpload from "../VideoUpload";

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
      <VideoUpload width="500px" height="500px" />
    </div>
  );
};

export default Example;
