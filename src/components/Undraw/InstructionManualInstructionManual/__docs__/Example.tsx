import React, { FC } from "react";
  import InstructionManualInstructionManual from "../InstructionManualInstructionManual";
  
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
        <InstructionManualInstructionManual width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  