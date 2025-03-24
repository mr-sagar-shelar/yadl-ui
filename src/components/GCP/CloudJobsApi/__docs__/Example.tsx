import React, { FC } from "react";
  import CloudJobsApi from "../CloudJobsApi";
  
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
        <CloudJobsApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  