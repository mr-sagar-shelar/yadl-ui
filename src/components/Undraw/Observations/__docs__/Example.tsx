import React, { FC } from "react";
import Observations from "../Observations";

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
      <Observations width="500px" height="500px" />
    </div>
  );
};

export default Example;
