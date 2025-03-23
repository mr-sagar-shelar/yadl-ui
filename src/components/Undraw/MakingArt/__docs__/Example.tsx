import React, { FC } from "react";
import MakingArt from "../MakingArt";

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
      <MakingArt width="500px" height="500px" />
    </div>
  );
};

export default Example;
