import React, { FC } from "react";
  import VirtualClusters from "../VirtualClusters";
  
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
        <VirtualClusters width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  