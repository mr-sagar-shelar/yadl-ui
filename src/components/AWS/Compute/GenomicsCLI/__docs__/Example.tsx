import React, { FC } from "react";
  import GenomicsCLI from "../GenomicsCLI";
  
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
        <GenomicsCLI width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  