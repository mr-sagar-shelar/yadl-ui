import React, { FC } from "react";
import Security from "../Security";

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
      <Security width="500px" height="500px" />
    </div>
  );
};

export default Example;
