import React, { FC } from "react";
  import DNSMultistack from "../DNSMultistack";
  
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
        <DNSMultistack width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  