import React, { FC } from "react";
  import DNSSecurityPolicy from "../DNSSecurityPolicy";
  
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
        <DNSSecurityPolicy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  