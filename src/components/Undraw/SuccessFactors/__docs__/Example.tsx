import React, { FC } from "react";
import SuccessFactors from "../SuccessFactors";

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
      <SuccessFactors width="500px" height="500px" />
    </div>
  );
};

export default Example;
