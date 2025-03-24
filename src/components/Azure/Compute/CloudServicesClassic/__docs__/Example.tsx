import React, { FC } from "react";
  import CloudServicesClassic from "../CloudServicesClassic";
  
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
        <CloudServicesClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  