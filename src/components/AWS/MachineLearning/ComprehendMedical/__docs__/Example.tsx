import React, { FC } from "react";
  import ComprehendMedical from "../ComprehendMedical";
  
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
        <ComprehendMedical width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  