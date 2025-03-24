import React, { FC } from "react";
  import ResourceGuard from "../ResourceGuard";
  
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
        <ResourceGuard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  