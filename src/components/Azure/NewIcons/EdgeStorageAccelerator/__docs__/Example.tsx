import React, { FC } from "react";
  import EdgeStorageAccelerator from "../EdgeStorageAccelerator";
  
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
        <EdgeStorageAccelerator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  