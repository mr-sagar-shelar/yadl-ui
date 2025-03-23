import React, { FC } from "react";
import CreationProcess from "../CreationProcess";

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
      <CreationProcess width="500px" height="500px" />
    </div>
  );
};

export default Example;
