import React, { FC } from "react";
import MoreMusicMoreMusic from "../MoreMusicMoreMusic";

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
      <MoreMusicMoreMusic width="500px" height="500px" />
    </div>
  );
};

export default Example;
