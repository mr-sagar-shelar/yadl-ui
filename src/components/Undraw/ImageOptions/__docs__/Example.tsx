import React, { FC } from "react";
import ImageOptions from "../ImageOptions";

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
      <ImageOptions width="500px" height="500px" />
    </div>
  );
};

export default Example;
