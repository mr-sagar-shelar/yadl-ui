import React, { FC } from "react";
import ChristmasMode from "../ChristmasMode";

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
      <ChristmasMode width="500px" height="500px" />
    </div>
  );
};

export default Example;
