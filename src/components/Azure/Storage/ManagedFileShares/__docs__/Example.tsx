import React, { FC } from "react";
  import ManagedFileShares from "../ManagedFileShares";
  
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
        <ManagedFileShares width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  