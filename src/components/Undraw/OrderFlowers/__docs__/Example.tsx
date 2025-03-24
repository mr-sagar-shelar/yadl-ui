import React, { FC } from "react";
  import OrderFlowers from "../OrderFlowers";
  
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
        <OrderFlowers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  