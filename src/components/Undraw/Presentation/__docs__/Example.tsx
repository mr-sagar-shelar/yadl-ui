import React, { FC } from "react";
import Presentation from "../Presentation";

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
      <Presentation width="500px" height="500px" />
    </div>
  );
};

export default Example;
