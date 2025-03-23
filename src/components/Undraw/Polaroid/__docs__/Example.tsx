import React, { FC } from "react";
import Polaroid from "../Polaroid";

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
      <Polaroid width="500px" height="500px" />
    </div>
  );
};

export default Example;
