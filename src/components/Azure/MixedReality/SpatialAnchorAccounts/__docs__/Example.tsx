import React, { FC } from "react";
  import SpatialAnchorAccounts from "../SpatialAnchorAccounts";
  
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
        <SpatialAnchorAccounts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  