import React, { FC } from "react";
import BusinessPlan from "../BusinessPlan";

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
      <BusinessPlan width="500px" height="500px" />
    </div>
  );
};

export default Example;
