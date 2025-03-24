import React, { FC } from "react";
  import CloudHealthcareApi from "../CloudHealthcareApi";
  
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
        <CloudHealthcareApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  