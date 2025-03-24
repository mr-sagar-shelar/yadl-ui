import React, { FC } from "react";
  import DefenderIndustrialPackagingSystem from "../DefenderIndustrialPackagingSystem";
  
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
        <DefenderIndustrialPackagingSystem width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  