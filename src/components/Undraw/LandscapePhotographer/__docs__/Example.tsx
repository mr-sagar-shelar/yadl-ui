import React, { FC } from "react";
import LandscapePhotographer from "../LandscapePhotographer";

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
      <LandscapePhotographer width="500px" height="500px" />
    </div>
  );
};

export default Example;
