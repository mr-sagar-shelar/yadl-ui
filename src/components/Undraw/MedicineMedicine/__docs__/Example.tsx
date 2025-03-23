import React, { FC } from "react";
import MedicineMedicine from "../MedicineMedicine";

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
      <MedicineMedicine width="500px" height="500px" />
    </div>
  );
};

export default Example;
