import React, { FC } from "react";
import WebDeveloper from "../WebDeveloper";

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
      <WebDeveloper width="500px" height="500px" />
    </div>
  );
};

export default Example;
