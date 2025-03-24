import React, { FC } from "react";
  import DataZone from "../DataZone";
  
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
        <DataZone width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  