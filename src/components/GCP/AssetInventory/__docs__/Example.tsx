import React, { FC } from "react";
  import AssetInventory from "../AssetInventory";
  
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
        <AssetInventory width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  