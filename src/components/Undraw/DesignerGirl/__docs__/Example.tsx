import React, { FC } from "react";
import DesignerGirl from "../DesignerGirl";

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
      <DesignerGirl width="500px" height="500px" />
    </div>
  );
};

export default Example;
