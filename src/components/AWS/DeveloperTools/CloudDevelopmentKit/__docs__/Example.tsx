import React, { FC } from "react";
  import CloudDevelopmentKit from "../CloudDevelopmentKit";
  
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
        <CloudDevelopmentKit width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  