import React, { FC } from "react";
import Multitasking from "../Multitasking";

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
      <Multitasking width="500px" height="500px" />
    </div>
  );
};

export default Example;
