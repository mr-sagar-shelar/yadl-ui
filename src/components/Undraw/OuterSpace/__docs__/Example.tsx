import React, { FC } from "react";
import OuterSpace from "../OuterSpace";

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
      <OuterSpace width="500px" height="500px" />
    </div>
  );
};

export default Example;
