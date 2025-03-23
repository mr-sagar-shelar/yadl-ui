import React, { FC } from "react";
import Environment1Environment from "../Environment1Environment";

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
      <Environment1Environment width="500px" height="500px" />
    </div>
  );
};

export default Example;
