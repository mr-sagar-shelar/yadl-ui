import React, { FC } from "react";
import Articles from "../Articles";

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
      <Articles width="500px" height="500px" />
    </div>
  );
};

export default Example;
