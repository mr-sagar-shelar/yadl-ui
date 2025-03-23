import React, { FC } from "react";
import Playlist from "../Playlist";

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
      <Playlist width="500px" height="500px" />
    </div>
  );
};

export default Example;
