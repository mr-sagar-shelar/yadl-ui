import React, { FC } from "react";
  import AppSpace from "../AppSpace";
  
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
        <AppSpace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  