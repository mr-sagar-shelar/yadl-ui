import React, { FC } from "react";
  import CloudIds from "../CloudIds";
  
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
        <CloudIds width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  