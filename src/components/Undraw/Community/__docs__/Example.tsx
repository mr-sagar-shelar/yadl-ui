import React, { FC } from "react";
import Community from "../Community";

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
      <Community width="500px" height="500px" />
    </div>
  );
};

export default Example;
