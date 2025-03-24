import React, { FC } from "react";
  import ResourceExplorer from "../ResourceExplorer";
  
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
        <ResourceExplorer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  