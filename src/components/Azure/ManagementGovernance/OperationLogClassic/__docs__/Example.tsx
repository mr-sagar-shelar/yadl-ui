import React, { FC } from "react";
  import OperationLogClassic from "../OperationLogClassic";
  
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
        <OperationLogClassic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  