import React, { FC } from "react";
import MobilePayments from "../MobilePayments";

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
      <MobilePayments width="500px" height="500px" />
    </div>
  );
};

export default Example;
