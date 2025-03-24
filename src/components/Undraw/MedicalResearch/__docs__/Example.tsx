import React, { FC } from "react";
  import MedicalResearch from "../MedicalResearch";
  
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
        <MedicalResearch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  