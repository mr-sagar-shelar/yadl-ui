import React, { FC } from "react";
  import ParallelCluster from "../ParallelCluster";
  
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
        <ParallelCluster width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  