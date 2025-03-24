import React, { FC } from "react";
  import PremiumNetworkTier from "../PremiumNetworkTier";
  
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
        <PremiumNetworkTier width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  