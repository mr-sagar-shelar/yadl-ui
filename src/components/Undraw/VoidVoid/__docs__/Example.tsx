import React, { FC } from "react";
import VoidVoid from "../VoidVoid";

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
      <VoidVoid width="500px" height="500px" />
    </div>
  );
};

export default Example;
