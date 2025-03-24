import React, { FC } from "react";
  import AppComplianceAutomation from "../AppComplianceAutomation";
  
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
        <AppComplianceAutomation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  