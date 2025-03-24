import React, { FC } from "react";
  import TransitGateway from "../TransitGateway";
  
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
        <TransitGateway width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  