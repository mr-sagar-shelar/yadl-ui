import React, { FC } from "react";
  import CloudApis from "../CloudApis";
  
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
        <CloudApis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  