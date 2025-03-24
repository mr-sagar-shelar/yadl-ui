import React, { FC } from "react";
  import PublicIPAddresses from "../PublicIPAddresses";
  
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
        <PublicIPAddresses width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  