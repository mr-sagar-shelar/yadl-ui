import React, { FC } from "react";
  import CreditCardPayment from "../CreditCardPayment";
  
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
        <CreditCardPayment width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  