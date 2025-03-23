import React, { FC } from "react";
import FinancialData from "../FinancialData";

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
      <FinancialData width="500px" height="500px" />
    </div>
  );
};

export default Example;
