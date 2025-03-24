import React, { FC } from "react";
  import PhishingProtection from "../PhishingProtection";
  
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
        <PhishingProtection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  