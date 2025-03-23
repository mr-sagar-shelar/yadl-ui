import React, { FC } from "react";
import FillIn from "../FillIn";

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
      <FillIn width="500px" height="500px" />
    </div>
  );
};

export default Example;
