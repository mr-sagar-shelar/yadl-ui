import React, { FC } from "react";
import Happy from "../Happy";

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
      <Happy width="500px" height="500px" />
    </div>
  );
};

export default Example;
