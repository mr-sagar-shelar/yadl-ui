import React, { FC } from "react";
import BusinessDecisions from "../BusinessDecisions";

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
      <BusinessDecisions width="500px" height="500px" />
    </div>
  );
};

export default Example;
