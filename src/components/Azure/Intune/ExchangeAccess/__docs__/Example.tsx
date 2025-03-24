import React, { FC } from "react";
  import ExchangeAccess from "../ExchangeAccess";
  
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
        <ExchangeAccess width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  