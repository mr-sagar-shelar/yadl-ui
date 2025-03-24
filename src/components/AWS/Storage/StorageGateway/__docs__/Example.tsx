import React, { FC } from "react";
  import StorageGateway from "../StorageGateway";
  
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
        <StorageGateway width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  