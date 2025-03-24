import React, { FC } from "react";
  import SSISLiftAndShiftIR from "../SSISLiftAndShiftIR";
  
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
        <SSISLiftAndShiftIR width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  