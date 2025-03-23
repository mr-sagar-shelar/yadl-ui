import React, { FC } from "react";
import Annotation from "../Annotation";

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
      <Annotation width="500px" height="500px" />
    </div>
  );
};

export default Example;
