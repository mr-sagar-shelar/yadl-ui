import React, { FC } from "react";
import Payments from "../Payments";

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
      <Payments width="500px" height="500px" />
    </div>
  );
};

export default Example;
