import React, { FC } from "react";
  import SetupWizard from "../SetupWizard";
  
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
        <SetupWizard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  