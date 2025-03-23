import React, { FC } from "react";
import VideoGames from "../VideoGames";

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
      <VideoGames width="500px" height="500px" />
    </div>
  );
};

export default Example;
