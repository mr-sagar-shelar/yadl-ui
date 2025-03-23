import React, { FC } from "react";
import ImageViewer from "../ImageViewer";

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
      <ImageViewer width="500px" height="500px" />
    </div>
  );
};

export default Example;
