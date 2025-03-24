import React, { FC } from "react";
  import ContainerServicesDeprecated from "../ContainerServicesDeprecated";
  
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
        <ContainerServicesDeprecated width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  