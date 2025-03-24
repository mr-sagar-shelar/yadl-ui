import React, { FC } from "react";
  import CloudBuild from "../CloudBuild";
  
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
        <CloudBuild width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  