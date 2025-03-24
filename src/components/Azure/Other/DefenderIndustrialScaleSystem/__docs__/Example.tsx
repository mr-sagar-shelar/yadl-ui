import React, { FC } from "react";
  import DefenderIndustrialScaleSystem from "../DefenderIndustrialScaleSystem";
  
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
        <DefenderIndustrialScaleSystem width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  