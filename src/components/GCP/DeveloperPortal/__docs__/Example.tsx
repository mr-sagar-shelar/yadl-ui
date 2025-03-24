import React, { FC } from "react";
  import DeveloperPortal from "../DeveloperPortal";
  
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
        <DeveloperPortal width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  