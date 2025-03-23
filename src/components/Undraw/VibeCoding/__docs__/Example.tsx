import React, { FC } from "react";
import VibeCoding from "../VibeCoding";

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
      <VibeCoding width="500px" height="500px" />
    </div>
  );
};

export default Example;
