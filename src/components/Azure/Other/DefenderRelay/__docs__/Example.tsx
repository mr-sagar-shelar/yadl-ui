import React, { FC } from "react";
  import DefenderRelay from "../DefenderRelay";
  
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
        <DefenderRelay width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  