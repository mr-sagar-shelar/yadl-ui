import React, { FC } from "react";
  import DefenderProgramableBoard from "../DefenderProgramableBoard";
  
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
        <DefenderProgramableBoard width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  