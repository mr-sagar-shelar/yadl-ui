import React, { FC } from "react";
  import ComplianceCenter from "../ComplianceCenter";
  
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
        <ComplianceCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  