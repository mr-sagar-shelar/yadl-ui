import React, { FC } from "react";
  import DataPipeline from "../DataPipeline";
  
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
        <DataPipeline width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  