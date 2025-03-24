import React, { FC } from "react";
  import DataTransfer from "../DataTransfer";
  
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
        <DataTransfer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  