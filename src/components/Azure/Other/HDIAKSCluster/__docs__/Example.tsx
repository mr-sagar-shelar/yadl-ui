import React, { FC } from "react";
  import HDIAKSCluster from "../HDIAKSCluster";
  
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
        <HDIAKSCluster width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  