import React, { FC } from "react";
  import WorkloadIdentityPool from "../WorkloadIdentityPool";
  
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
        <WorkloadIdentityPool width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  