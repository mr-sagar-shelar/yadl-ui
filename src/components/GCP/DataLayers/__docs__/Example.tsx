import React, { FC } from "react";
  import DataLayers from "../DataLayers";
  
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
        <DataLayers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  