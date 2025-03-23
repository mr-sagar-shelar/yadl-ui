import React, { FC } from "react";
import DesignerMindset from "../DesignerMindset";

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
      <DesignerMindset width="500px" height="500px" />
    </div>
  );
};

export default Example;
