import React, { FC } from "react";
  import ContainerInstances from "../ContainerInstances";
  
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
        <ContainerInstances width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  