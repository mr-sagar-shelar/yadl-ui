import React, { FC } from "react";
import Relaxation from "../Relaxation";

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
      <Relaxation width="500px" height="500px" />
    </div>
  );
};

export default Example;
