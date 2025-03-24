import React, { FC } from "react";
  import CloudFunctions from "../CloudFunctions";
  
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
        <CloudFunctions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  