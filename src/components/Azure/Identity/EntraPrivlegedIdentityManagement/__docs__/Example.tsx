import React, { FC } from "react";
  import EntraPrivlegedIdentityManagement from "../EntraPrivlegedIdentityManagement";
  
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
        <EntraPrivlegedIdentityManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  