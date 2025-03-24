import React, { FC } from "react";
  import LaunchWizard from "../LaunchWizard";
  
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
        <LaunchWizard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  