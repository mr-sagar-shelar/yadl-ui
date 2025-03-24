import React, { FC } from "react";
  import SimpleStorageService from "../SimpleStorageService";
  
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
        <SimpleStorageService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  