import React, { FC } from "react";
  import StandardNetworkTier from "../StandardNetworkTier";
  
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
        <StandardNetworkTier width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  