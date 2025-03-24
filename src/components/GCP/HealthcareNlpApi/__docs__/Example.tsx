import React, { FC } from "react";
  import HealthcareNlpApi from "../HealthcareNlpApi";
  
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
        <HealthcareNlpApi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  