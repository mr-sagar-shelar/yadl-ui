import React, { FC } from "react";
import CryptoPortfolio from "../CryptoPortfolio";

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
      <CryptoPortfolio width="500px" height="500px" />
    </div>
  );
};

export default Example;
