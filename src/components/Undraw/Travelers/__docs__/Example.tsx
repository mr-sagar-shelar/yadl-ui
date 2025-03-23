import React, { FC } from "react";
import Travelers from "../Travelers";

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
      <Travelers width="500px" height="500px" />
    </div>
  );
};

export default Example;
