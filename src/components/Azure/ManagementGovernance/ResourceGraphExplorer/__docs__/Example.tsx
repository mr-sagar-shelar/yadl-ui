import React, { FC } from "react";
  import ResourceGraphExplorer from "../ResourceGraphExplorer";
  
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
        <ResourceGraphExplorer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  