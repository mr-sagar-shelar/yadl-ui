import React, { FC } from "react";
import ReadingBook from "../ReadingBook";

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
      <ReadingBook width="500px" height="500px" />
    </div>
  );
};

export default Example;
