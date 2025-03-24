import React, { FC } from "react";
  import SimpleStorageServiceGlacier from "../SimpleStorageServiceGlacier";
  
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
        <SimpleStorageServiceGlacier width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  