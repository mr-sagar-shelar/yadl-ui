import React, { FC } from "react";
import ShortBio from "../ShortBio";

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
      <ShortBio width="500px" height="500px" />
    </div>
  );
};

export default Example;
