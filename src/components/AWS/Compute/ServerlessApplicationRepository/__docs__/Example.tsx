import React, { FC } from "react";
  import ServerlessApplicationRepository from "../ServerlessApplicationRepository";
  
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
        <ServerlessApplicationRepository width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  