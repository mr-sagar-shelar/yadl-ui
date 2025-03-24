import React, { FC } from "react";
  import DefenderExternalManagement from "../DefenderExternalManagement";
  
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
        <DefenderExternalManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  