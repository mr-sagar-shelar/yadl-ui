import React, { FC } from "react";
import Skateboard from "../Skateboard";

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
      <Skateboard width="500px" height="500px" />
    </div>
  );
};

export default Example;
