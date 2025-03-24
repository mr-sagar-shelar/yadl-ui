import React, { FC } from "react";
  import ConfigurationManagement from "../ConfigurationManagement";
  
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
        <ConfigurationManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  