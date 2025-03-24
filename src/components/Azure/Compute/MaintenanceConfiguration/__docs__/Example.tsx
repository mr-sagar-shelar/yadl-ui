import React, { FC } from "react";
  import MaintenanceConfiguration from "../MaintenanceConfiguration";
  
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
        <MaintenanceConfiguration width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  