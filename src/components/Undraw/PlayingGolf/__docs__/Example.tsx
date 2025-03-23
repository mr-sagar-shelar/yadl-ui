import React, { FC } from "react";
import PlayingGolf from "../PlayingGolf";

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
      <PlayingGolf width="500px" height="500px" />
    </div>
  );
};

export default Example;
