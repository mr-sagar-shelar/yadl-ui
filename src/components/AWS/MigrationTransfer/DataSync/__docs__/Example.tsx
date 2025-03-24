import React, { FC } from "react";
  import DataSync from "../DataSync";
  
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
        <DataSync width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  