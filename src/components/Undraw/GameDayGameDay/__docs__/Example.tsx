import React, { FC } from "react";
import GameDayGameDay from "../GameDayGameDay";

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
      <GameDayGameDay width="500px" height="500px" />
    </div>
  );
};

export default Example;
