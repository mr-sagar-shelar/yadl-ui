import React, { FC } from "react";
import GameWorld from "../GameWorld";

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
      <GameWorld width="500px" height="500px" />
    </div>
  );
};

export default Example;
