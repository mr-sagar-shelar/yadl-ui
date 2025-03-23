import React, { FC } from "react";
import Selection from "../Selection";

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
      <Selection width="500px" height="500px" />
    </div>
  );
};

export default Example;
