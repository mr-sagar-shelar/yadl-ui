import React, { FC } from "react";
  import CloudDeploy from "../CloudDeploy";
  
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
        <CloudDeploy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  