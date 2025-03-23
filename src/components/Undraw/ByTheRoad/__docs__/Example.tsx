import React, { FC } from "react";
import ByTheRoad from "../ByTheRoad";

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
      <ByTheRoad width="500px" height="500px" />
    </div>
  );
};

export default Example;
