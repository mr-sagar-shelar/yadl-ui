import React, { FC } from "react";
import SunnyDay from "../SunnyDay";

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
      <SunnyDay width="500px" height="500px" />
    </div>
  );
};

export default Example;
