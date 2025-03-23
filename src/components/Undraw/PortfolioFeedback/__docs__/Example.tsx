import React, { FC } from "react";
import PortfolioFeedback from "../PortfolioFeedback";

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
      <PortfolioFeedback width="500px" height="500px" />
    </div>
  );
};

export default Example;
