import React, { FC } from "react";
  import AzureCenterforSAP from "../AzureCenterforSAP";
  
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
        <AzureCenterforSAP width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  