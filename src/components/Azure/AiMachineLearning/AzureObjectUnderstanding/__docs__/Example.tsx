import React, { FC } from "react";
  import AzureObjectUnderstanding from "../AzureObjectUnderstanding";
  
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
        <AzureObjectUnderstanding width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  