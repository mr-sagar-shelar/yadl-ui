import React, { FC } from "react";
  import KeyManagementService from "../KeyManagementService";
  
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
        <KeyManagementService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  