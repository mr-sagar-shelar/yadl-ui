import React, { FC } from "react";
  import AppServiceEnvironments from "../AppServiceEnvironments";
  
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
        <AppServiceEnvironments width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  