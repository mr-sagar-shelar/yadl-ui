import React, { FC } from "react";
  import OrderConfirmed from "../OrderConfirmed";
  
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
        <OrderConfirmed width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  