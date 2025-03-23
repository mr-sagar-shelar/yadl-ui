import React, { FC } from "react";
import Create from "../Create";

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
      <Create width="500px" height="500px" />
    </div>
  );
};

export default Example;
