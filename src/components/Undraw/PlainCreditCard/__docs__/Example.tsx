import React, { FC } from "react";
  import PlainCreditCard from "../PlainCreditCard";
  
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
        <PlainCreditCard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  