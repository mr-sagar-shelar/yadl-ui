import React, { FC } from "react";
  import DNSZones from "../DNSZones";
  
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
        <DNSZones width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  