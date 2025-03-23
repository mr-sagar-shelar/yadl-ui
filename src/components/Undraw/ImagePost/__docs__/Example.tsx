import React, { FC } from "react";
import ImagePost from "../ImagePost";

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
      <ImagePost width="500px" height="500px" />
    </div>
  );
};

export default Example;
