import React, { FC } from "react";
import Wallet from "../Wallet";

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
      <Wallet width="500px" height="500px" />
    </div>
  );
};

export default Example;
