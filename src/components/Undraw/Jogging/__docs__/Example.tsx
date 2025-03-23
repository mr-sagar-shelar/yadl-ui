import React, { FC } from "react";
import Jogging from "../Jogging";

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
      <Jogging width="500px" height="500px" />
    </div>
  );
};

export default Example;
