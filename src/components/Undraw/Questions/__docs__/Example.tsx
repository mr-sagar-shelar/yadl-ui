import React, { FC } from "react";
import Questions from "../Questions";

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
      <Questions width="500px" height="500px" />
    </div>
  );
};

export default Example;
