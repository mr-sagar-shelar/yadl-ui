import React, { FC } from "react";
import FunMoments from "../FunMoments";

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
      <FunMoments width="500px" height="500px" />
    </div>
  );
};

export default Example;
