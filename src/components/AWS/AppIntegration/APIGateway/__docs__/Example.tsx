import React, { FC } from "react";
  import APIGateway from "../APIGateway";
  
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
        <APIGateway width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  