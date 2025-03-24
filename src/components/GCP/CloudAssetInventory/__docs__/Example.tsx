import React, { FC } from "react";
  import CloudAssetInventory from "../CloudAssetInventory";
  
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
        <CloudAssetInventory width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  