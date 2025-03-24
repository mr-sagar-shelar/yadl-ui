import React, { FC } from "react";
  import ContainerRegistries from "../ContainerRegistries";
  
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
        <ContainerRegistries width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  