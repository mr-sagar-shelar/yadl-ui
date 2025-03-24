import React, { FC } from "react";
  import AzureLighthouse from "../AzureLighthouse";
  
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
        <AzureLighthouse width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  