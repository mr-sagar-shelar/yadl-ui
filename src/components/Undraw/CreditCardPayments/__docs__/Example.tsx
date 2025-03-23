import React, { FC } from "react";
import CreditCardPayments from "../CreditCardPayments";

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
      <CreditCardPayments width="500px" height="500px" />
    </div>
  );
};

export default Example;
