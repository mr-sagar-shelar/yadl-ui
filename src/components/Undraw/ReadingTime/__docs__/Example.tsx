import React, { FC } from "react";
import ReadingTime from "../ReadingTime";

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
      <ReadingTime width="500px" height="500px" />
    </div>
  );
};

export default Example;
