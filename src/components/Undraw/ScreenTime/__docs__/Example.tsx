import React, { FC } from "react";
import ScreenTime from "../ScreenTime";

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
      <ScreenTime width="500px" height="500px" />
    </div>
  );
};

export default Example;
