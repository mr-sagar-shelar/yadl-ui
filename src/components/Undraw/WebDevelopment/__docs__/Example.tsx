import React, { FC } from "react";
import WebDevelopment from "../WebDevelopment";

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
      <WebDevelopment width="500px" height="500px" />
    </div>
  );
};

export default Example;
