import React, { FC } from "react";
import Choose from "../Choose";

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
      <Choose width="500px" height="500px" />
    </div>
  );
};

export default Example;
