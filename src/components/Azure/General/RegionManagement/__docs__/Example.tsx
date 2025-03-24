import React, { FC } from "react";
  import RegionManagement from "../RegionManagement";
  
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
        <RegionManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  