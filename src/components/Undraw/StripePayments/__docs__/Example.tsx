import React, { FC } from "react";
import StripePayments from "../StripePayments";

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
      <StripePayments width="500px" height="500px" />
    </div>
  );
};

export default Example;
