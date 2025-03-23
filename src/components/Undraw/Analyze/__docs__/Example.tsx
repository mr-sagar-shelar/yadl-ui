import React, { FC } from "react";
import Analyze from "../Analyze";

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
      <Analyze width="500px" height="500px" />
    </div>
  );
};

export default Example;
