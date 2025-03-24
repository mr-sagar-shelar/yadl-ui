import React, { FC } from "react";
  import SQLServerRegistries from "../SQLServerRegistries";
  
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
        <SQLServerRegistries width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  