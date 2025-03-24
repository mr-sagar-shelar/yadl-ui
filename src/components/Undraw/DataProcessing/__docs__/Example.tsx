import React, { FC } from "react";
  import DataProcessing from "../DataProcessing";
  
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
        <DataProcessing width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  