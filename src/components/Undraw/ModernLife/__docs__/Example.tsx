import React, { FC } from "react";
import ModernLife from "../ModernLife";

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
      <ModernLife width="500px" height="500px" />
    </div>
  );
};

export default Example;
