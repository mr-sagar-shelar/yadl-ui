import React, { FC } from "react";
import Ethereum from "../Ethereum";

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
      <Ethereum width="500px" height="500px" />
    </div>
  );
};

export default Example;
