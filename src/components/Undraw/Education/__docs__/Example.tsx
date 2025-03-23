import React, { FC } from "react";
import Education from "../Education";

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
      <Education width="500px" height="500px" />
    </div>
  );
};

export default Example;
