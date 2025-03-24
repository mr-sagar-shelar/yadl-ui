import React, { FC } from "react";
  import SCVMMManagementServers from "../SCVMMManagementServers";
  
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
        <SCVMMManagementServers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  