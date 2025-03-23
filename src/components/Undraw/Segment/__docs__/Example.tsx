import React, { FC } from "react";
import Segment from "../Segment";

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
      <Segment width="500px" height="500px" />
    </div>
  );
};

export default Example;
