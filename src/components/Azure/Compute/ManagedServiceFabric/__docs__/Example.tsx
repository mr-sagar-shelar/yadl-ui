import React, { FC } from "react";
  import ManagedServiceFabric from "../ManagedServiceFabric";
  
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
        <ManagedServiceFabric width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  