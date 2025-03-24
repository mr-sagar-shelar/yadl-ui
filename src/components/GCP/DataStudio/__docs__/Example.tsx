import React, { FC } from "react";
  import DataStudio from "../DataStudio";
  
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
        <DataStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  