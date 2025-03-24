import React, { FC } from "react";
  import DeliveryAddress from "../DeliveryAddress";
  
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
        <DeliveryAddress width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  