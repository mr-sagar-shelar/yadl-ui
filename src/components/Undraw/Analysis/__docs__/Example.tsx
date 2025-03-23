import React, { FC } from "react";
import Analysis from "../Analysis";

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
      <Analysis width="500px" height="500px" />
    </div>
  );
};

export default Example;
