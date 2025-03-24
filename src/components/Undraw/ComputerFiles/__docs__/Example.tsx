import React, { FC } from "react";
  import ComputerFiles from "../ComputerFiles";
  
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
        <ComputerFiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  