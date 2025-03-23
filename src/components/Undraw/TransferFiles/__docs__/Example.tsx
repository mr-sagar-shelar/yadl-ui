import React, { FC } from "react";
import TransferFiles from "../TransferFiles";

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
      <TransferFiles width="500px" height="500px" />
    </div>
  );
};

export default Example;
