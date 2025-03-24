import React, { FC } from "react";
  import ResourceGroupList from "../ResourceGroupList";
  
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
        <ResourceGroupList width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  