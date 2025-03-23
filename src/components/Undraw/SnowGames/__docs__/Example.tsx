import React, { FC } from "react";
import SnowGames from "../SnowGames";

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
      <SnowGames width="500px" height="500px" />
    </div>
  );
};

export default Example;
