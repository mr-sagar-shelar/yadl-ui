import React, { FC } from "react";
import Content from "../Content";

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
      <Content width="500px" height="500px" />
    </div>
  );
};

export default Example;
