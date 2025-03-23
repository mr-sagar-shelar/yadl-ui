import React, { FC } from "react";
import Pitching from "../Pitching";

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
      <Pitching width="500px" height="500px" />
    </div>
  );
};

export default Example;
