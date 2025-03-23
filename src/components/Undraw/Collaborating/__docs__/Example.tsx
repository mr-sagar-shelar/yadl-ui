import React, { FC } from "react";
import Collaborating from "../Collaborating";

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
      <Collaborating width="500px" height="500px" />
    </div>
  );
};

export default Example;
