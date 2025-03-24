import React, { FC } from "react";
  import MedicalCare from "../MedicalCare";
  
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
        <MedicalCare width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  