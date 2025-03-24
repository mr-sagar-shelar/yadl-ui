import React, { FC } from "react";
  import CloudApiGateway from "../CloudApiGateway";
  
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
        <CloudApiGateway width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  