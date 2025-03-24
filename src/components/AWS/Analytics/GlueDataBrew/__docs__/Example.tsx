import React, { FC } from "react";
  import GlueDataBrew from "../GlueDataBrew";
  
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
        <GlueDataBrew width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  