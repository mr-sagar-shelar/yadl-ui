import React, { FC } from "react";
import WallPost from "../WallPost";

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
      <WallPost width="500px" height="500px" />
    </div>
  );
};

export default Example;
