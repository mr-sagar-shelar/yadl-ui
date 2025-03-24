import React, { FC } from "react";
  import CloudRouter from "../CloudRouter";
  
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
        <CloudRouter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  