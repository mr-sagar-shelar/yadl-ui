import React, { FC } from "react";
import DigitalCurrencyDigitalCurrency from "../DigitalCurrencyDigitalCurrency";

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
      <DigitalCurrencyDigitalCurrency width="500px" height="500px" />
    </div>
  );
};

export default Example;
