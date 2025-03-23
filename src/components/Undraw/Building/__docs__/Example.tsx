import React, { FC } from "react";
import Building from "../Building";

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
      <Building width="500px" height="500px" />
    </div>
  );
};

export default Example;
