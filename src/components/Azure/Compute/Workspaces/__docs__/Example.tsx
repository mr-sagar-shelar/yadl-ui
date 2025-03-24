import React, { FC } from "react";
  import Workspaces from "../Workspaces";
  
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
        <Workspaces width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  