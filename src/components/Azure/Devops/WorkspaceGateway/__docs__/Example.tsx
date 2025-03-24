import React, { FC } from "react";
  import WorkspaceGateway from "../WorkspaceGateway";
  
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
        <WorkspaceGateway width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  