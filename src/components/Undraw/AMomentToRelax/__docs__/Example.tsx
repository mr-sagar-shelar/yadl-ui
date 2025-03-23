import React, { FC } from "react";
import AMomentToRelax from "../AMomentToRelax";

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
      <AMomentToRelax width="500px" height="500px" />
    </div>
  );
};

export default Example;
