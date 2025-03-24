import React, { FC } from "react";
  import ResourcesProvider from "../ResourcesProvider";
  
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
        <ResourcesProvider width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  