import React, { FC } from "react";
  import FHIRService from "../FHIRService";
  
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
        <FHIRService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  