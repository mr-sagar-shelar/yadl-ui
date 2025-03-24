import React, { FC } from "react";
  import OrderDelivered from "../OrderDelivered";
  
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
        <OrderDelivered width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  