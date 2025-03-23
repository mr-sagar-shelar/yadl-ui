import React, { FC } from "react";
import InformedDecision from "../InformedDecision";

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
      <InformedDecision width="500px" height="500px" />
    </div>
  );
};

export default Example;
