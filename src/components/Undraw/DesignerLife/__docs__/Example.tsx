import React, { FC } from "react";
import DesignerLife from "../DesignerLife";

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
      <DesignerLife width="500px" height="500px" />
    </div>
  );
};

export default Example;
