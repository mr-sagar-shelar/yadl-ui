import React, { FC } from "react";
import NatureBenefits from "../NatureBenefits";

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
      <NatureBenefits width="500px" height="500px" />
    </div>
  );
};

export default Example;
