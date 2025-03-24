import React, { FC } from "react";
  import CloudOps from "../CloudOps";
  
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
        <CloudOps width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  