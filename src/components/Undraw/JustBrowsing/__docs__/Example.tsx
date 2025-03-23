import React, { FC } from "react";
import JustBrowsing from "../JustBrowsing";

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
      <JustBrowsing width="500px" height="500px" />
    </div>
  );
};

export default Example;
