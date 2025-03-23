import React, { FC } from "react";
import AthletesTraining from "../AthletesTraining";

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
      <AthletesTraining width="500px" height="500px" />
    </div>
  );
};

export default Example;
