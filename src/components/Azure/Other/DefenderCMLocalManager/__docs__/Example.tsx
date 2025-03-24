import React, { FC } from "react";
  import DefenderCMLocalManager from "../DefenderCMLocalManager";
  
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
        <DefenderCMLocalManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  