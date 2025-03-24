import React, { FC } from "react";
  import ContainerRegistry from "../ContainerRegistry";
  
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
        <ContainerRegistry width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  