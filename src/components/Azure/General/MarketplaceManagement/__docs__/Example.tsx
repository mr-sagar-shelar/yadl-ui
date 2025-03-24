import React, { FC } from "react";
  import MarketplaceManagement from "../MarketplaceManagement";
  
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
        <MarketplaceManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  