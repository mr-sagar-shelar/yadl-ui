import React, { FC } from "react";
  import ContainerAppsEnvironments from "../ContainerAppsEnvironments";
  
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
        <ContainerAppsEnvironments width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  