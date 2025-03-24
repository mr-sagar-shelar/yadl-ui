import React, { FC } from "react";
  import CloudMap from "../CloudMap";
  
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
        <CloudMap width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  