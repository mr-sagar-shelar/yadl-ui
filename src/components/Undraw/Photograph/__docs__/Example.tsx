import React, { FC } from "react";
import Photograph from "../Photograph";

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
      <Photograph width="500px" height="500px" />
    </div>
  );
};

export default Example;
