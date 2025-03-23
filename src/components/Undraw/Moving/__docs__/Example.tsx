import React, { FC } from "react";
import Moving from "../Moving";

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
      <Moving width="500px" height="500px" />
    </div>
  );
};

export default Example;
